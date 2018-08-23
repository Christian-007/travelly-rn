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
  destinationDetails: {
    position: 'absolute',
    left: 0,
    top: 50,
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

  /* Travel Detail Column */
  travelDetailCol: {
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  travelDateTitle: {
    fontSize: 14,
    color: '#808080',
    marginBottom: 5
  },
  travelDateSubtitle: {
    fontSize: 18,
    color: '#000'
  }
});

export default styles;