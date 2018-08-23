import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import BookBtn from '../Destination/BookBtn';

class WebViewPage extends Component {
  goToWebView = () => {
    this.props.navigation.navigate('WebViewModal');
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <BookBtn 
          btnText='OPEN WEBVIEW' 
          style={{marginTop: 10}}
          onPress={this.goToWebView}
        />
      </View>
    )
  }
}

const localStyle = StyleSheet.create({
  buttonStyle: {
    padding: 10,
  }
});

export default WebViewPage;