import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './components/Home/Home';

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    
  },
},
{
  headerMode: 'none',
  navigationOptions: {
    header: null
  }
});

export default RootStack;
