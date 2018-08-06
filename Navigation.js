import React from 'react'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Material from 'react-native-vector-icons/MaterialIcons'; 
import HomeScreen from './components/Home/Home';
import DestinationScreen from './components/Destination/Destination';
import FullcardScreen from './components/Fullcard/Fullcard';
import NotificationScreen from './components/NotificationView/NotificationView';
import SearchScreen from './components/SearchScreen/SearchScreen';
import Calendar from './components/Calendar/CalendarComponent';

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
  SearchScreen: {
    screen: SearchScreen
  },
},
{
  headerMode: 'none',
  navigationOptions: {
    header: null
  }
});

/* Hide tabBar on Destination.js */
HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index === 1) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

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

const CalendarStack = createStackNavigator({
  Calendar: {
    screen: Calendar
  }
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
      title: 'Home'
    }
  },
  Notif: {
    screen: NotifStack,
    navigationOptions: {
      title: 'Notifications'
    }
  },
  Calendar: {
    screen: CalendarStack,
    navigationOptions: {
      title: 'Calendar'
    }
  }
},
{  
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Home') {
        iconName = `home`;
      } else if (routeName === 'Notif') {
        iconName = `notifications`;
      } else if (routeName === 'Calendar') {
        iconName = `date-range`;
      }

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      return <Material name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#193EB1',
    inactiveTintColor: 'grey',
    showLabel: false,
    style: {
      borderTopWidth: 0,
      elevation: 15,
      backgroundColor: '#fff',
      margin: 1,
    }
  }
});

export default TabNavigation;
