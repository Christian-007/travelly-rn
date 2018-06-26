import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import HeaderBar from './HeaderBar';
import styles from './Stylesheet';
import fontStyle from '../../common/FontStyle';
import Ionic from 'react-native-vector-icons/Ionicons'; 

class Destination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgData: {},
      countryUppercase: '',
    }
  }

  componentDidMount() {
    const data = this.props.navigation.getParam('imgData');
    const countryData = this.props.navigation.getParam('countryUppercase');
    console.log('data', data);
    this.setState({
      imgData: data,
      countryUppercase: countryData
    }, function() {
      console.log('state', this.state);
    });
  }

  render() {
    return (
      <View style={{width:'100%', height: '100%'}}>
        <View style={{position: 'relative',zIndex: 20,}}>
          <HeaderBar navigationObj={this.props.navigation} />
        </View>
        
        <View style={styles.imgStyle}>
          <Image 
            style={{width: '100%', height: '100%'}}
            source={{uri: this.state.imgData.url}}
          />
        </View> 
        <View style={styles.darkOpacity}>
        </View>
        <View style={styles.destinationDetails}>
          <Text style={[fontStyle.bold, styles.country]}>{this.state.countryUppercase}</Text>
          <Text style={[fontStyle.black, styles.place]}>{this.state.imgData.place}</Text>
          <View style={styles.hr}></View>
          <View style={styles.detail}>
            <View style={styles.iconText}>
              <Ionic name="ios-calendar-outline" size={20} color="#fff" />
              <Text style={[fontStyle.regular, styles.detailText]}>{'   '}4/1/2018</Text>
            </View>
            <View style={[styles.iconText, {marginLeft: 40}]}>
              <Ionic name="ios-timer-outline" size={20} color="#fff" />
              <Text style={[fontStyle.regular, styles.detailText]}>{'   '}20:30</Text>
            </View>
            <View style={[styles.iconText, {marginLeft: 40}]}>
              <Ionic name="ios-contact-outline" size={20} color="#fff" />
              <Text style={[fontStyle.regular, styles.detailText]}>{'   '}2</Text>
            </View>
          </View>
          <Text style={[fontStyle.regular, styles.price]}>${' ' + this.state.imgData.price}</Text>
        </View>
      </View>
    )
  }
}

export default Destination;