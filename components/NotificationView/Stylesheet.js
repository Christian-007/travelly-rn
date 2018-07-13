import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  notifCommon: {
    flexDirection: 'row',
    padding: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  notifNew: {
    backgroundColor: '#ecf7fe',
  },
  notifOld: {
    backgroundColor: '#fff',
  }
});

export default styles;