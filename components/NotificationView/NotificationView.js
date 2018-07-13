import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './Stylesheet';
import fontStyle from '../../common/FontStyle';
import HeaderBar from '../../common/HeaderBar';
import NotifList from './NotifList';
import firebase from 'react-native-firebase';
// Optional: Flow type
import type { Notification } from 'react-native-firebase';

class NotificationView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed: false,
      stuff: [],
      log: '',
      notifDisplayLog: 'notif display: nothing',
      notifDisplay: null,
      notifListenLog: 'notif listen: nothing',
      notifListen: null,
    };
  }

  onClickNotif = () => {
    // this.setState({pressed: true});
  }

  componentDidMount() {
    // Build a channel
    const channel = new firebase.notifications.Android.Channel('test-channel', 'Test Channel', firebase.notifications.Android.Importance.Max)
      .setDescription('My apps test channel');
    // Create the channel
    firebase.notifications().android.createChannel(channel);

    // Build a channel group
    const channelGroup = new firebase.notifications.Android.ChannelGroup('test-group', 'Test Channel Group');
    // Create the channel group
    firebase.notifications().android.createChannelGroup(channelGroup);

    const notificationBuilder = new firebase.notifications.Notification()
      .setNotificationId('notificationId')
      .setTitle('My notification title')
      .setBody('My notification body')
      .setData({
        key1: 'value1',
        key2: 'value2',
      });

    notificationBuilder.android.setChannelId('test-channel');

    // this.messageListener = firebase.messaging().onMessage((message) => {
    //     // Process your message as required
    //   console.log('hey new message is received!', message);
    //   this.setState({
    //     log: 'hey, new message!'
    //   });
    //   firebase.notifications().displayNotification(notification)
    // });

    // this.notificationDisplayedListener = firebase.notifications().onNotificationDisplayed((notification: Notification) => {
    //   // Process your notification as required
    //   // ANDROID: Remote notifications do not contain the channel ID. You will have to specify this manually if you'd like to re-display the notification.
    //   console.log('notification display ', notification);
    //   this.setState({
    //     notifDisplayLog: 'hey, display log!!',
        
    //   });
    //   notification.android.setChannelId('test-channel');
    //   firebase.notifications().displayNotification(notification);
    // });
    this.notificationListener = firebase.notifications().onNotification((notification: Notification) => {
      // Process your notification as required
      console.log('notification listen ', notification);
      this.setState({
        notifListenLog: 'hey, listen log!!',
        
      });
      notification.android.setChannelId('test-channel');
      firebase.notifications().displayNotification(notification);
    });
  }

  componentWillUnmount() {
    // this.messageListener();
    // this.notificationDisplayedListener();
    this.notificationListener();
  }

  render() {
    return (
      <View style={styles.container}>
        <HeaderBar />
        <View style={{backgroundColor: '#ccc', height: 1,}}></View>
        <View style={{backgroundColor:'#eee'}}>
          <Text>{this.state.log}</Text>
          <Text>{this.state.stuff}</Text>
          <Text>{this.state.notifDisplay}</Text>
          <Text>{this.state.notifDisplayLog}</Text>
          <Text>{this.state.notifListen}</Text>
          <Text>{this.state.notifListenLog}</Text>
          <NotifList />
          <NotifList />
          <NotifList />
        </View>
        
      </View>
    )
  }
}

export default NotificationView;