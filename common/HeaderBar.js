import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import fontStyle from './FontStyle';
import Material from 'react-native-vector-icons/MaterialIcons'; 
import Ionic from 'react-native-vector-icons/Ionicons'; 

export default class HeaderBar extends Component {
  render() {
    return (
      <View style={styles.headerBg}>
        {/* <View style={{flex: 1, justifyContent:'center', alignItems: 'flex-start'}}>
          <Material name="keyboard-backspace" size={25} color="#ccc" />
        </View> */}
        <View style={{flex: 1, justifyContent:'center', alignItems: 'center', flexDirection: 'row'}}>
          <Ionic name="ios-map" size={25} color="#193EB1" />
          <Text style={[styles.titleBar, fontStyle.logo]}>{'  '}Travelly</Text>
        </View>
        {/* <View style={{flex: 1, justifyContent:'center', alignItems: 'flex-end'}}>
          <Material name="help" size={25} color="#ddd" />
        </View> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerBg: {
    backgroundColor: '#fff',
    padding: 15,
    flexDirection: 'row'
  },
  titleBar: {
    fontSize: 16,
    color: '#000'
  },
});