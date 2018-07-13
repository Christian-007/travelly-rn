import React from 'react'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Material from 'react-native-vector-icons/MaterialIcons'; 
import HomeScreen from './components/Home/Home';
import DestinationScreen from './components/Destination/Destination';
import FullcardScreen from './components/Fullcard/Fullcard';
import NotificationScreen from './components/NotificationView/NotificationView';

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Destination: {
    screen: DestinationScreen,
  },
  Fullcard: {
    screen: FullcardScreen,
  },
},
{
  headerMode: 'none',
  navigationOptions: {
    header: null
  }
});

const NotifStack = createStackNavigator({
  Notification: {
    screen: NotificationScreen,
  },
},
{
  headerMode: 'none',
  navigationOptions: {
    header: null
  }
});

const TabNavigation = createBottomTabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => {
        <Material name="home" size={30} color={tintColor} />
      }
    }
  },
  Notif: {
    screen: NotifStack,
    navigationOptions: {
      title: 'Notification',
      tabBarIcon: ({ tintColor }) => {
        <Material name="home" size={30} color={tintColor} />
      }
    }
  }
},
{  
  tabBarOptions: {
    activeTintColor: '#00b16e',
    inactiveTintColor: '#c0c0c0',
    style: {
      backgroundColor: 'white',
      borderTopColor: 'blue'
    }
  },
});

export default TabNavigation;
