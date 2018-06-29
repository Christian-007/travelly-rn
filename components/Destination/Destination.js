import React, { Component } from 'react';
import { Text, View, Image, ScrollView, LayoutAnimation, TouchableOpacity, Platform, UIManager  } from 'react-native';
import HeaderBar from './HeaderBar';
import styles from './Stylesheet';
import fontStyle from '../../common/FontStyle';
import Ionic from 'react-native-vector-icons/Ionicons'; 
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class Destination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgData: {},
      countryUppercase: '',
    }
  }

  componentDidMount() {
    const data = this.props.navigation.getParam('imgData');
    const countryData = this.props.navigation.getParam('countryUppercase');
    console.log('data', data);
    this.setState({
      imgData: data,
      countryUppercase: countryData
    }, function() {
      console.log('state', this.state);
    });
  }

  _renderScrollViewContent() {
    const data = Array.from({length: 30});
    return (
      <View style={styles.scrollViewContent}>
        {data.map((_, i) =>
          <View key={i} style={styles.row}>
            <Text>{i}</Text>
          </View>
        )}
      </View>
    );
  }

  render() {
    return (
      <View style={styles.fill}>
        <View style={{position: 'relative',zIndex: 20,}}>
          <HeaderBar navigationObj={this.props.navigation} />
        </View>
        <View style={[styles.imgStyle]}>
          <Image 
            style={{width: '100%', height: '100%'}}
            source={{uri: this.state.imgData.url}}
            resizeMode="cover"
          />
        </View> 
        <View style={[styles.darkOpacity]}>
        </View>
        <View style={[styles.destinationDetails]}>
          <Text style={[fontStyle.bold, styles.country]}>{this.state.countryUppercase}</Text>
          <Text style={[fontStyle.black, styles.place]}>{this.state.imgData.place}</Text>
        </View>
      </View>
    )
  }
}

export default Destination;