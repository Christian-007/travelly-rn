import React, { Component } from 'react';
import { Text, View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import fontStyle from '../../common/FontStyle';
import Material from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

class TagList extends Component {
  state = {
    tags: [
      {
        title: 'Urban',
        subtitle: 'Exploration',
        gradientStart: '#58CBCB',
        gradientFinish: '#8BDDDD',
      },
      {
        title: 'Town',
        subtitle: 'Sight-seeing',
        gradientStart: '#8D84EF',
        gradientFinish: '#BBA2E5',
      },
      {
        title: 'City',
        subtitle: 'Break',
        gradientStart: '#ff9a9e',
        gradientFinish: '#fad0c4',
      },
      {
        title: 'Nature',
        subtitle: 'Landscape',
        gradientStart: '#a1c4fd',
        gradientFinish: '#c2e9fb',
      }
    ]
  }

  renderElements = (data) => {
    return (
      <TouchableOpacity 
        style={tagStyle.cardStyle}
        onPress={() => alert('hey')}
      >
      <LinearGradient
        colors={[data.item.gradientStart, data.item.gradientFinish]}
        start={{x: 0, y: 0}} end={{x: 1, y: 1}}
        style={tagStyle.innerCard}
      >
        <Material name="apps" size={10} color="#fff" style={{alignSelf: 'flex-end', margin: 5, opacity: 0.6}}/>
        <Text style={[fontStyle.regular, {color: '#fff', fontSize: 15, marginLeft: 20, marginTop: 10, opacity: 0.7}]}>{data.item.title}</Text>
        <Text style={[fontStyle.bold, {color: '#fff', fontSize: 20, marginLeft: 20}]}>{data.item.subtitle}</Text>
      </LinearGradient>
        
      </TouchableOpacity>
    )
    
  }

  render() {
    return (
      <FlatList
        horizontal
        extraData={this.state}
        data={this.state.tags}
        renderItem={(item) => this.renderElements(item)}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
      />
      
    )
  }
}

const tagStyle = StyleSheet.create({
  cardStyle: {
    marginLeft: 10,
    marginTop: 20,
  },
  innerCard: {
    height: 80,
    width: 160,
    borderRadius: 4,
  }
});

export default TagList;