import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import fontStyle from '../../common/FontStyle';
import { Toast } from 'native-base';
import SearchNavbar from '../../common/SearchNavbar';
import Material from 'react-native-vector-icons/MaterialCommunityIcons'; 

class SearchScreen extends Component {
  onPressBackButton = () => {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={{ flex: 1}}>
        <SearchNavbar onPressBackButton={this.onPressBackButton} />  
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <Material name="airplane-takeoff" size={100} color="#ccc" />
          <Text style={[fontStyle.regular, {fontSize: 25}]}>Explore the world!</Text>
        </View>    
      </View>
    );
  }
}

export default SearchScreen;