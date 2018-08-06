import React from 'react';
import { View, Text, FlatList, ScrollView, Image, TouchableOpacity, Animated } from 'react-native';
import styles from './Stylesheet';
import fontStyle from '../../common/FontStyle';
import HeaderBar from '../../common/HeaderBar';
import firebase from 'react-native-firebase';
import Svg, { Rect } from 'react-native-svg';
import SearchBar from './SearchBar';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedPhotos: [],
      loading: false,
      fadeAnim: new Animated.Value(0.7),
    };
  }

  componentDidMount() {
    console.log('firebase: ', firebase.database().app.name);
    this.setState({loading: true});
    let imagesObj = firebase.database().ref().child('images');
    imagesObj.once('value', (snapshot) => {
      this.setState({
        fetchedPhotos: Object.values(snapshot.val()),
        loading: false,
      }, () => {
        console.log(this.state);
      })
    });
    this.animate();
  }

  firebaseNotif = () => {
    const FCM = firebase.messaging();
    const rtdbRef = firebase.database();


    FCM.requestPermission()
    .then(() => {
      // User has authorised  
      console.log('Authorised user!');
      FCM.getToken().then(currentToken => {
        if (currentToken) {
          console.log('Token', currentToken);
          rtdbRef.ref('users/dY1grt123/notifTokens').set({
            [currentToken]: true
          }, err => {
            if (err) {
              console.log('error occurred:', err);
            } else {
              console.log('successfully write!');
            }
          })
        } else {
          // Show permission request.
          console.log('No Instance ID token available. Request permission to generate one.');
        }
      }).catch(err => {
        console.log('An error occurred while retrieving token. ', err);
        
      });
    })
    .catch(error => {
      // User has rejected permissions
      console.log('Reject permissions!');
    });
  }

  animate = () => {
    this.state.fadeAnim.setValue(0.7)
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 1050,              // Make it take a while
        
      }
    ).start(() => {
      if (this.state.loading) {
        this.animate();
      }
    });
  }

  onImagePressed = (data) => {
    const countryUppercase = data.country.toUpperCase();
    this.props.navigation.navigate('Destination', {
      imgData: data,
      countryUppercase
    });
  }

  onSearchBarPressed = () => {
    this.props.navigation.navigate('SearchScreen');
    // alert('hey')
  }

  renderPhoto = (data, index) => {
    if(data.index % 2 === 0) {
      return (
        <TouchableOpacity
          style={[styles.cardStyle, {flexDirection: 'row', flex: 1}]}
          onPress={() => this.onImagePressed(data.item)}
        >
          <Image
            borderTopLeftRadius={4}
            borderBottomLeftRadius={4}
            style={{width: '50%', height: 150}}
            source={{uri: data.item.url}}
            resizeMode="cover"
          /> 
          <View style={{padding: 10, width: '50%'}}>
            <Text style={[fontStyle.bold, styles.country]}>{data.item.country}</Text>
            <Text style={[fontStyle.bold, styles.place]}>{data.item.place}</Text>
            <Text style={[fontStyle.regular, styles.desc]}>{data.item.description}</Text>
            <Text style={[fontStyle.bold, styles.price]}>FROM ${data.item.price}</Text>
          </View>
        </TouchableOpacity>
      )  
    } else {
      return (
        <TouchableOpacity 
          style={[styles.cardStyle, {flexDirection: 'row', flex: 1}]}
          onPress={() => this.onImagePressed(data.item)}
        > 
          <View style={{padding: 10, width: '50%'}}>
            <Text style={[fontStyle.bold, styles.country]}>{data.item.country}</Text>
            <Text style={[fontStyle.bold, styles.place]}>{data.item.place}</Text>
            <Text style={[fontStyle.regular, styles.desc]}>{data.item.description}</Text>
            <Text style={[fontStyle.bold, styles.price]}>FROM ${data.item.price}</Text>
          </View>
          <Image
            borderTopRightRadius={4}
            borderBottomRightRadius={4}
            style={{width: '50%', height: 150}}
            source={{uri: data.item.url}}
            resizeMode="cover"
          />
        </TouchableOpacity>
      )
    }
  }

  renderPopular = (data) => {
    return (
      <TouchableOpacity 
        style={styles.cardStyle}
        onPress={() => this.onImagePressed(data.item)}
      >
        <Image 
          borderTopLeftRadius={4}
          borderTopRightRadius={4}
          style={styles.imgPopular}
          source={{uri: data.item.url}}
          resizeMode="cover"
        />
        <View style={{padding: 10}}>
          <Text style={[fontStyle.bold, styles.country]}>{data.item.country}</Text>
          <Text style={[fontStyle.bold, styles.place]}>{data.item.place}</Text>
          <Text style={[fontStyle.regular, styles.desc, {width: 240}]}>{data.item.description}</Text>
          <Text style={[fontStyle.bold, styles.price]}>FROM ${data.item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  renderContentLoader = () => {
    const contents = Array.from({length: 3});
    return(
      <ScrollView horizontal={true}>
        {contents.map((_,i) =>
          <Animated.View key={i} style={{margin: 10, borderWidth: 1, borderRadius: 4, borderColor: '#ecebeb', width: 260, opacity: this.state.fadeAnim}}>
            <Svg height="370" width="260">
              <Rect x="0" y="0" rx="4" ry="4" width="260" height="260" fill="#ecebeb" /> 
              <Rect x="10" y="270" rx="4" ry="4" width="70" height="6" fill="#ecebeb" /> 
              <Rect x="10" y="283" rx="4" ry="4" width="80" height="8" fill="#ecebeb" />
              <Rect x="10" y="305" rx="4" ry="4" width="240" height="6" fill="#ecebeb" />
              <Rect x="10" y="318" rx="4" ry="4" width="240" height="6" fill="#ecebeb" /> 
              <Rect x="10" y="350" rx="4" ry="4" width="80" height="6" fill="#ecebeb" /> 
            </Svg>
          </Animated.View> 
        )}
      </ScrollView>
    )
  };

  renderListLoader = () => {
    return (
      <ScrollView>
        <Animated.View style={[{opacity: this.state.fadeAnim}]}>
          <View style={[styles.listLoader]}>
            <View style={{width: '50%', height: 150, backgroundColor: "#ecebeb"}}></View>
            <View style={{padding: 10, width: '50%'}}>
              <View style={[{width: 70,}, styles.loaderText]} />
              <View style={[{marginTop: 3, width: 80,}, styles.loaderText]} />
              <View style={[{marginTop: 12,}, styles.loaderText]} />
              <View style={[{marginTop: 5,}, styles.loaderText]} />
              <View style={[{marginTop: 5, width: '90%',}, styles.loaderText]} />
              <View style={[{marginTop: 12, width: 70,}, styles.loaderText]} />
            </View>
          </View>
          <View style={[styles.listLoader]}>
            <View style={{padding: 10, width: '50%'}}>
              <View style={[{width: 70,}, styles.loaderText]} />
              <View style={[{marginTop: 3, width: 80,}, styles.loaderText]} />
              <View style={[{marginTop: 12,}, styles.loaderText]} />
              <View style={[{marginTop: 5,}, styles.loaderText]} />
              <View style={[{marginTop: 5, width: '90%',}, styles.loaderText]} />
              <View style={[{marginTop: 12, width: 70,}, styles.loaderText]} />
            </View>
            <View style={{width: '50%', height: 150, backgroundColor: "#ecebeb"}}></View>
          </View>
        </Animated.View>
      </ScrollView>  
    );
  };
  
  keyExtractor = (item, index) => item.id;

  render() {
    const marginLeft = this.state.fadeAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 300]
    })
    return (
      <View style={styles.container}>
        <HeaderBar />
        <ScrollView>
          <View style={{justifyContent: 'center', paddingLeft: 20, paddingRight: 20 }}>
            {/* <TouchableOpacity 
              style={{backgroundColor: 'blue', padding: 10, width: 100, height: 35}}
              onPress={this.firebaseNotif}
            >
              <Text style={{color: 'white'}}>Push Notif</Text>
            </TouchableOpacity> */}
            <SearchBar onSearchPress={this.onSearchBarPressed}/>
            <Text style={[styles.sectionTitle, fontStyle.bold]}>Most Popular</Text>
            {this.state.loading && this.renderContentLoader()}
            <FlatList
              horizontal
              extraData={this.state}
              data={this.state.fetchedPhotos}
              renderItem={(url) => this.renderPopular(url)}
              keyExtractor={(item, index) => index.toString()}
            />

            <Text style={[styles.sectionTitle, fontStyle.bold, {marginTop: 20}]}>Discover</Text>
            {this.state.loading && this.renderListLoader()}
            <FlatList
              extraData={this.state}
              data={this.state.fetchedPhotos}
              renderItem={(item, index) => this.renderPhoto(item, index)}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default HomeScreen;
