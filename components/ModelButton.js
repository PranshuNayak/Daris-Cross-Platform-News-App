import React from 'react';
import { TouchableOpacity,StyleSheet,Text } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

function ModelButton({text,onPress}) {
  return(

    <TouchableOpacity onPress={onPress} style={styles.container} >
        <MaterialCommunityIcons name="arrow-left" color="black" size={30} />
        {text && <Text style={styles.text}>{text}</Text> }
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    alignItems:'center',
    marginVertical:5,
    marginLeft:10
},
text:{
  fontSize:20,
  marginLeft:10
}
})

export default ModelButton;
