import React from 'react';
import {Ionicons} from '@expo/vector-icons'
import { Text, View,StyleSheet, TouchableOpacity } from 'react-native';


function BottomTabIcons({size,name,text,onPress}) {
  return (
      <TouchableOpacity onPress={onPress}>
          <View style={styles.container}>
          <Ionicons name={name} size={size} color='white' />
          {text && <Text style={styles.text} >{text}</Text>}
      </View>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:80,
        height:50,
        marginHorizontal:5,
        
    },
    text:{
        color:'white',
        marginLeft:5,
        marginTop:5,
        fontSize:15,
    }
})

export default BottomTabIcons;
