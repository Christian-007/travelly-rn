import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Material from 'react-native-vector-icons/MaterialIcons';

export default class HeaderBar extends Component {
  
  onBackPressed = () => {
    this.props.navigationObj.goBack();
  }

  render() {
    return (
      <View style={styles.headerBg}>
        <TouchableOpacity
          style={{flex: 1, justifyContent:'center', alignItems: 'flex-start'}}
          onPress={this.onBackPressed}
        >
          <Material name="keyboard-backspace" size={25} color="#fff" />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerBg: {
    backgroundColor: 'transparent',
    padding: 15,
    flexDirection: 'row',
  },
  titleBar: {
    fontSize: 16,
    color: '#000'
  },
});