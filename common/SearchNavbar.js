import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import fontStyle from './FontStyle';
import Material from 'react-native-vector-icons/MaterialIcons'; 

export default class SearchNavbar extends Component {
  render() {
    return (
      <View style={styles.headerBg}>
        <TouchableOpacity onPress={this.props.onPressBackButton} style={{justifyContent:'center', alignItems: 'flex-start'}}>
          <Material name="keyboard-backspace" size={25} color="#ccc" />
        </TouchableOpacity>
        <TextInput
          style={{marginLeft: 5, width: '90%'}}
          autoFocus={true}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerBg: {
    backgroundColor: '#fff',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleBar: {
    fontSize: 16,
    color: '#000'
  },
});