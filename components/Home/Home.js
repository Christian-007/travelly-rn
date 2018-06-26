import React from 'react';
import { View, Text, FlatList, ScrollView, Image, TouchableOpacity } from 'react-native';
import styles from './Stylesheet';
import fontStyle from '../../common/FontStyle';
import HeaderBar from '../../common/HeaderBar';
import { database } from '../../config/firebase';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedPhotos: [],
    }
  }
  componentDidMount() {
    let imagesObj = database.ref().child('images');
    imagesObj.once('value', (snapshot) => {
      this.setState({
        fetchedPhotos: Object.values(snapshot.val())
      }, () => {
        console.log(this.state);
      })
    });
  }

  onImagePressed = (data) => {
    const countryUppercase = data.country.toUpperCase();
    this.props.navigation.navigate('Destination', {
      imgData: data,
      countryUppercase
    });
  }

  renderPhoto = (data, index) => {
    if(data.index % 2 === 0) {
      return (
        <TouchableOpacity
          style={[styles.cardStyle, {flexDirection: 'row', flex: 1}]}
          onPress={() => this.onImagePressed(data.item)}
        >
          <Image
            borderTopLeftRadius={4}
            borderBottomLeftRadius={4}
            style={{width: '50%', height: 150}}
            source={{uri: data.item.url}}
          /> 
          <View style={{padding: 10, width: '50%'}}>
            <Text style={[fontStyle.bold, styles.country]}>{data.item.country}</Text>
            <Text style={[fontStyle.bold, styles.place]}>{data.item.place}</Text>
            <Text style={[fontStyle.regular, styles.desc]}>{data.item.description}</Text>
            <Text style={[fontStyle.bold, styles.price]}>FROM ${data.item.price}</Text>
          </View>
        </TouchableOpacity>
      )  
    } else {
      return (
        <TouchableOpacity 
          style={[styles.cardStyle, {flexDirection: 'row', flex: 1}]}
          onPress={() => this.onImagePressed(data.item)}
        > 
          <View style={{padding: 10, width: '50%'}}>
            <Text style={[fontStyle.bold, styles.country]}>{data.item.country}</Text>
            <Text style={[fontStyle.bold, styles.place]}>{data.item.place}</Text>
            <Text style={[fontStyle.regular, styles.desc]}>{data.item.description}</Text>
            <Text style={[fontStyle.bold, styles.price]}>FROM ${data.item.price}</Text>
          </View>
          <Image
            borderTopRightRadius={4}
            borderBottomRightRadius={4}
            style={{width: '50%', height: 150}}
            source={{uri: data.item.url}}
          />
        </TouchableOpacity>
      )
    }
  }

  renderPopular = (data) => {
    return (
      <TouchableOpacity 
        style={styles.cardStyle}
        onPress={() => this.onImagePressed(data.item)}
      >
        <Image 
          borderTopLeftRadius={4}
          borderTopRightRadius={4}
          style={styles.imgPopular}
          source={{uri: data.item.url}}
        />
        <View style={{padding: 10}}>
          <Text style={[fontStyle.bold, styles.country]}>{data.item.country}</Text>
          <Text style={[fontStyle.bold, styles.place]}>{data.item.place}</Text>
          <Text style={[fontStyle.regular, styles.desc, {width: 240}]}>{data.item.description}</Text>
          <Text style={[fontStyle.bold, styles.price]}>FROM ${data.item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  
  keyExtractor = (item, index) => item.id;

  render() {
    return (
      <View style={styles.container}>
        <HeaderBar />
        <ScrollView>
          <View style={{justifyContent: 'center', paddingLeft: 20, paddingRight: 20 }}>
            <Text style={[styles.sectionTitle, fontStyle.bold]}>Most Popular</Text>
            <FlatList
              horizontal
              extraData={this.state}
              data={this.state.fetchedPhotos}
              renderItem={(url) => this.renderPopular(url)}
              keyExtractor={(item, index) => index.toString()}
            />

            <Text style={[styles.sectionTitle, fontStyle.bold, {marginTop: 20}]}>Discover</Text>
            <FlatList
              extraData={this.state}
              data={this.state.fetchedPhotos}
              renderItem={(item, index) => this.renderPhoto(item, index)}
              keyExtractor={(item, index) => index.toString()}
              numColumns={1}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default HomeScreen;
