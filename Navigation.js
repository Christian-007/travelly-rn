import { createStackNavigator } from 'react-navigation';
import HomeScreen from './components/Home/Home';
import DestinationScreen from './components/Destination/Destination';
import FullcardScreen from './components/Fullcard/Fullcard';

const RootStack = createStackNavigator({
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

export default RootStack;
