import React from 'react';
import { View,StyleSheet,Text } from 'react-native';
import {Entypo} from '@expo/vector-icons'

function IconComponent({icon}) {
  return (
      <View style={styles.container}>
          <Entypo name={icon} style={styles.icon} />
      </View>
  );
}

const styles = StyleSheet.create({
    container:{
        padding:5,
        borderRadius:20,
    },
    icon:{
        fontSize:30,
        color:'white',
       
      }
})

export default IconComponent;
