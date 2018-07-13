import { AppRegistry } from 'react-native';
import App from './App';
import bgMessaging from './bgMessaging';

AppRegistry.registerComponent('CalendarApp', () => App);
AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => bgMessaging); 
