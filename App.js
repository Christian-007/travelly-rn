/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import Navigation from './Navigation';
import { Root } from "native-base";

export default class App extends Component {
  render() {
    return (
      <Root>
        <Navigation />
      </Root>
    );
  }
}
