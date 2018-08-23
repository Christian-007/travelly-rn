import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import fontStyle from '../../common/FontStyle';

const BookBtn = ({btnText, style, onPress}) => {
  return (
    <TouchableOpacity style={[style, {marginLeft: 30, marginRight: 30}]} onPress={onPress}>
      <LinearGradient
        colors={['#1A43B5', '#336FE3']}
        start={{x: 0, y: 0}} end={{x: 1, y: 1}}
        style={styles.btnWrapper}
      >  
      <View style={{justifyContent:'center', alignItems: 'flex-start'}}>
        <FontAwesome name="ticket" size={22} color="white" />
      </View>
      <View style={{flex: 1, justifyContent:'center', alignItems: 'center', flexDirection: 'row'}}>
        <Text style={[ fontStyle.black, {fontSize: 15, color: 'white', letterSpacing: 2}]}>{btnText}</Text>
      </View>
      </LinearGradient>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btnWrapper: {
    padding: 15,
    flexDirection: 'row',
    width: '100%',
    borderRadius: 4
  }
})

export default BookBtn;