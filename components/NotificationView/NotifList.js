import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './Stylesheet';
import Ionic from 'react-native-vector-icons/Ionicons'; 

export default class NotifList extends Component {
  state = {
    bgColor: '#ecf7fe'
  }

  onClickNotif = () => {
    this.setState({
      bgColor: '#fff'
    })
  }

  render() {
    return (
      <TouchableOpacity 
        onPress={this.onClickNotif}
        style={[styles.notifCommon, {backgroundColor: this.state.bgColor}]}
      >
        <Ionic name="ios-contact" size={25} />
        <Text>User Derp is now following.</Text>
      </TouchableOpacity>
    )
  }
}