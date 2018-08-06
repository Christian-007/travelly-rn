import React, { Component } from 'react';
import { 
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Material from 'react-native-vector-icons/MaterialIcons'; 
import styles from '../NotificationView/Stylesheet';

class SearchBar extends Component {
  render() {
    return (
      <View style={searchBarStyle.searchBarWrapper}>
        <Material name='search' size={20} color='#c0c0c0' />
        <TouchableOpacity onPress={this.props.onSearchPress}>
          <Text
            style={{marginLeft: 5}}
          >
          Where do you want to go?
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const searchBarStyle = StyleSheet.create({
  searchBarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 4,
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
    elevation: 6,
    backgroundColor : "#fff", // invisible color
  }
})

export default SearchBar;