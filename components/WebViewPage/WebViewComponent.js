import React, { Component } from 'react';
import { Text, View, WebView } from 'react-native'

export default class WebViewComponent extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://react-create-app-pwa.firebaseapp.com/'}}
      />
    )
  }
}