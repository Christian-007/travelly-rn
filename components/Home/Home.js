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
      photos: [
        {
          id: 1,
          title: 'Hey'
        },
        {
          id: 2,
          title: `It's a me`
        },
        {
          id: 3,
          title: 'Derp'
        },
        {
          id: 4,
          title: 'Another'
        },
        {
          id: 5,
          title: 'Yes'
        },
        {
          id: 6,
          title: 'What'
        },
        {
          id: 7,
          title: 'Typo'
        },
        {
          id: 8,
          title: 'Define'
        },
      ],
      popular: [
        {
          id: 1,
          title: 'Hey'
        },
        {
          id: 2,
          title: `It's a me`
        },
        {
          id: 3,
          title: 'Derp'
        },
        {
          id: 4,
          title: 'Another'
        },
      ],
      testImg: [],
    }
  }
  componentDidMount() {
    let imagesObj = database.ref().child('images');
    imagesObj.once('value', (snapshot) => {
      this.setState({
        testImg: Object.values(snapshot.val())
      }, () => {
        console.log(this.state);
      })
    });
  }

  renderPhoto = (data, index) => {
    console.log('data', data.index);
    if(data.index % 2 === 0) {
      return (
        <View style={[styles.cardStyle, {flexDirection: 'row', flex: 1}]}>
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
        </View>
      )  
    } else {
      return (
        <View style={[styles.cardStyle, {flexDirection: 'row', flex: 1}]}> 
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
        </View>
      )
    }
  }

  renderPopular = (data) => {
    return (
      <View style={styles.cardStyle}>
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
      </View>
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
              data={this.state.testImg}
              renderItem={(url) => this.renderPopular(url)}
              keyExtractor={(item, index) => index.toString()}
            />

            <Text style={[styles.sectionTitle, fontStyle.bold, {marginTop: 20}]}>Discover</Text>
            <FlatList
              extraData={this.state}
              data={this.state.testImg}
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
