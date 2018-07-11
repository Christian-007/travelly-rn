// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
// initializes your application
admin.initializeApp(functions.config().firebase);

exports.makeUppercase = functions.database.ref('/messages/{pushId}/original')
  .onCreate((snapshot, context) => {
    // Grab the current value of what was written to the Realtime Database.
    const original = snapshot.val();
    console.log('Uppercasing', context.params.pushId, original);
    const uppercase = original.toUpperCase();
    // You must return a Promise when performing asynchronous tasks inside a Functions such as
    // writing to the Firebase Realtime Database.
    // Setting an "uppercase" sibling in the Realtime Database returns a Promise.
    return snapshot.ref.parent.child('uppercase').set(uppercase);
  });

exports.sendFollowerNotification = functions.database.ref('/followers/{followedUid}/{followerUid}')
  .onWrite((change, context) => {
    const followerUid = context.params.followerUid;
    const followedUid = context.params.followedUid;
    // If un-follow we exit the function.
    // if (!change.after.val()) {
    //   return console.log('User ', followerUid, 'un-followed user', followedUid);
    // }
    console.log('change after', change.after.val());
    console.log('change before', change.before.val());
    console.log('We have a new follower UID:', followerUid, 'for user:', followerUid);

    // Get the list of device notification tokens.
    const getDeviceTokensPromise = admin.database()
      .ref(`/users/${followedUid}/notifTokens`).once('value');

    // Get the follower profile.
    const getFollowerProfilePromise = admin.database()
      .ref(`/users/${followerUid}`).once('value');

    // The snapshot to the user's tokens.
    let tokensSnapshot;

    // The array containing all the user's tokens.
    let tokens;

    return Promise.all([getDeviceTokensPromise, getFollowerProfilePromise]).then(results => {
      tokensSnapshot = results[0];
      const follower = results[1];

      // Check if there are any device tokens.
      if (!tokensSnapshot.hasChildren()) {
        return console.log('There are no notification tokens to send to.');
      }
      console.log('There are', tokensSnapshot.numChildren(), 'tokens to send notifications to.');
      console.log('Fetched follower profile', follower.val());

      // Notification details.
      const payload = {
        notification: {
          title: 'You have a new follower!',
          body: `${follower.val().name} is now following you.`,
          sound: 'default'
        }
      };

      // Listing all tokens as an array.
      tokens = Object.keys(tokensSnapshot.val());
      // Send notifications to all tokens.
      return admin.messaging().sendToDevice(tokens, payload);
    }).then((response) => {
      // For each message check if there was an error.
      const tokensToRemove = [];
      response.results.forEach((result, index) => {
        const error = result.error;
        if (error) {
          console.error('Failure sending notification to', tokens[index], error);
          // Cleanup the tokens who are not registered anymore.
          if (error.code === 'messaging/invalid-registration-token' ||
              error.code === 'messaging/registration-token-not-registered') {
            tokensToRemove.push(tokensSnapshot.ref.child(tokens[index]).remove());
          }
        }
      });
      return Promise.all(tokensToRemove);
    });
  });
