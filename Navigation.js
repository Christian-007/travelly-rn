import { createStackNavigator } from 'react-navigation';
import HomeScreen from './components/Home/Home';
import DestinationScreen from './components/Destination/Destination';

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Destination: {
    screen: DestinationScreen,
  },
},
{
  headerMode: 'none',
  navigationOptions: {
    header: null
  }
});

export default RootStack;
