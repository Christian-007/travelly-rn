import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontWeight: '700',
    fontSize: 25,
    color: '#000',
  },
  cardStyle: {
    margin: 10,
    elevation: 7,
    borderRadius: 4,
    // background color must be set
    backgroundColor : "#fff", // invisible color
  },
  imgPopular: {
    width: 260,
    height: 260,
  },
  country: {
    color: '#888',
    fontSize: 12,
  },
  place: {
    color: '#000',
    fontSize: 14,
    marginTop: 2
  },
  desc: {
    fontSize: 12,
    marginTop: 7
  },
  price: {
    fontSize: 11,
    marginTop: 10,
    color: '#000'
  },
  listLoader: {
    flexDirection: 'row',
    flex: 1,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ecebeb',
    borderRadius: 4,
  },
  loaderText: {
    height: 6,
    backgroundColor: '#ecebeb',
    borderRadius: 4
  },
});

export default styles;