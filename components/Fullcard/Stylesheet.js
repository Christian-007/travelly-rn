import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  imgStyle: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: '100%'
  },
  darkOpacity: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    opacity: 0.2
  },
  country: {
    fontSize: 12,
    letterSpacing: 1,
    color: '#fff',
  },
  place: {
    marginTop: 5,
    fontSize: 35,
    letterSpacing: 1,
    color: '#fff',
  },
  price: {
    marginTop: 20,
    fontSize: 30,
    letterSpacing: 1,
    color: '#fff',
  },
  destinationDetails: {
    position: 'absolute',
    left: 0,
    bottom: 20,
    width: '100%',
    padding: 20,
  },
  detail: {
    flexDirection: 'row',
    marginTop: 5,
  },
  iconText: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
  },
  detailText: {
    color: '#fff'
  },
  hr: {
    marginTop: 5,
    height: 0.8,
    width: '100%',
    backgroundColor: '#fff',
    opacity: 0.5
  },
  fill: {
    flex: 1,
  },
  arrowBtn: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    paddingTop: 5, paddingBottom: 5,
    paddingLeft: 10, paddingRight: 10,
  },
});

export default styles;