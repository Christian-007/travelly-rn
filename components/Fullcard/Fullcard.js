import React, { Component } from 'react';
import { Text, View, Image, ScrollView, LayoutAnimation, TouchableOpacity, Platform, UIManager  } from 'react-native';
import HeaderBar from './HeaderBar';
import styles from './Stylesheet';
import fontStyle from '../../common/FontStyle';
import Ionic from 'react-native-vector-icons/Ionicons'; 
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class Fullcard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgData: {},
      countryUppercase: '',
      heightBar: '100%',
      styling: {
        bottom: 20,
      },
      priceStyling: {
        opacity: 1,
      },
      arrowStyle: {
        opacity: 1,
      }
    }
    if (Platform.OS === 'android') { UIManager.setLayoutAnimationEnabledExperimental(true) }
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

  onPress = () => {

    // Uncomment to animate the next state change.
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);

    // Or use a Custom Layout Animation
    // LayoutAnimation.configureNext(CustomLayoutAnimation);
    if (this.state.heightBar !== '100%') {
      this.setState({
        heightBar: '100%',
        styling: {
          bottom: 20,
        },
        priceStyling: {
          opacity: 1,
        },
        arrowStyle: {
          opacity: 1
        }
      });
    } else {
      this.setState({
        heightBar: '30%',
        styling: {
          bottom: 0,
          top: 30,
        },
        priceStyling: {
          opacity: 0,
        },
        arrowStyle: {
          opacity: 0,
          display: 'none'
        }
      });
    }
  }

  render() {
    return (
      <View style={styles.fill}>
        <View style={{position: 'relative',zIndex: 20,}}>
          <HeaderBar navigationObj={this.props.navigation} />
        </View>
        <View style={[styles.imgStyle, {height: this.state.heightBar}]}>
          <Image 
            style={{width: '100%', height: '100%'}}
            source={{uri: this.state.imgData.url}}
            resizeMode="cover"
          />
        </View> 
        <View style={[styles.darkOpacity, {height: this.state.heightBar}]}>
        </View>
        <View style={[styles.destinationDetails, this.state.styling]}>
          <Text style={[fontStyle.bold, styles.country]}>{this.state.countryUppercase}</Text>
          <Text style={[fontStyle.black, styles.place]}>{this.state.imgData.place}</Text>
          <View style={this.state.arrowStyle}>
            <View style={styles.hr}></View>
            <View style={styles.detail}>
              <View style={styles.iconText}>
                <Ionic name="ios-calendar-outline" size={20} color="#fff" />
                <Text style={[fontStyle.regular, styles.detailText]}>{'   '}4/1/2018</Text>
              </View>
              <View style={[styles.iconText, {marginLeft: 40}]}>
                <Ionic name="ios-timer-outline" size={20} color="#fff" />
                <Text style={[fontStyle.regular, styles.detailText]}>{'   '}20:30</Text>
              </View>
              <View style={[styles.iconText, {marginLeft: 40}]}>
                <Ionic name="ios-contact-outline" size={20} color="#fff" />
                <Text style={[fontStyle.regular, styles.detailText]}>{'   '}2</Text>
              </View>
            </View>
          </View>
          <Text style={[fontStyle.regular, styles.price, this.state.priceStyling]}>${' ' + this.state.imgData.price}</Text>
          <View style={[{marginTop: 10, alignItems: 'center'}, this.state.arrowStyle]}>
            <TouchableOpacity onPress={this.onPress} style={[styles.arrowBtn]}>
              <FontAwesome name="angle-double-down" size={25} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

export default Fullcard;