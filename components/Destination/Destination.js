import React, { Component } from 'react';
import { Text, View, Image, ScrollView, LayoutAnimation, TouchableOpacity, Platform, UIManager  } from 'react-native';
import HeaderBar from './HeaderBar';
import styles from './Stylesheet';
import fontStyle from '../../common/FontStyle';
import Material from 'react-native-vector-icons/MaterialIcons';
import BookBtn from './BookBtn';

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
        <View style={{height: '35%'}}>
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
        <BookBtn 
          btnText={'BOOK FROM $'+ this.state.imgData.price}
          style={{position: 'absolute', top: 200, left: 0, right: 0, zIndex: 21}}
        />
        <View style={styles.travelDetailCol}>
          <View style={{flexDirection: 'row', margin: 10, justifyContent: 'space-between'}}>
            <View>
              <Text style={[fontStyle.bold, styles.travelDateTitle]}>Departure</Text>
              <Text style={[fontStyle.black, styles.travelDateSubtitle]}>16/08</Text>
            </View>
            <View>
              <Text style={[fontStyle.bold, styles.travelDateTitle]}>Return</Text>
              <Text style={[fontStyle.black, styles.travelDateSubtitle]}>27/08</Text>
            </View>
            <View>
              <Text style={[fontStyle.bold, styles.travelDateTitle]}>People</Text>
              <Text style={[fontStyle.black, styles.travelDateSubtitle]}>2</Text>
            </View>
          </View>
          <View style={{height: 0.7, backgroundColor: '#dfdfdf', marginTop: 10, marginBottom: 10,}}></View>
          <View style={{marginTop: 10}}>
            <Text style={[fontStyle.black, {color: '#808080'}]}>About the travel</Text>
            <Text style={[fontStyle.black, {fontSize: 25, color: '#000'}]}>Description</Text>
            <Text style={[fontStyle.bold, {marginTop: 15, color: '#808080', lineHeight: 20}]}>Bali Rice Paddy is located in South of Bali Island. It's famous for its refreshing scenery. Another paragraph, another description that will be added on this line.</Text>
            <TouchableOpacity style={{marginTop: 15}}>
              <View style={{alignItems: 'center', flexDirection: 'row'}}>
              <Text style={[fontStyle.black, {letterSpacing: 1, color: 'black', fontSize: 11}]}>
                READ MORE 
              </Text>
              <Material name="arrow-drop-down" size={20} color="black" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{height: 0.7, backgroundColor: '#dfdfdf', marginTop: 10, marginBottom: 10,}}></View>
          <View style={{marginTop: 10}}>
            <Text style={[fontStyle.black, {color: '#808080'}]}>Traveller</Text>
            <Text style={[fontStyle.black, {fontSize: 25, color: '#000'}]}>Reviews</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default Destination;