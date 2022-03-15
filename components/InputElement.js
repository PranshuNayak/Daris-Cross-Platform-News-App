import React from 'react';
import { TextInput, View,StyleSheet,Dimensions } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/colors';

const {width} = Dimensions.get('window');

function InputElement({icon,placeholder,...otherprops}) {
  return (
      <View style={styles.container}>
          <MaterialCommunityIcons style={styles.icon} name={icon} size={20} />
          <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor={colors.black} {...otherprops} />
      </View>
  );
}

const styles = StyleSheet.create({
    container:{
        borderColor:colors.black,
        borderWidth:1,
        flexDirection:'row',
        alignItems:'center',
        height:50,
        borderRadius:20,
        width:width-20,
        alignSelf:'center',
        marginVertical:10
    },
    icon:{
        color:colors.black,
        fontSize:25,
        marginLeft:10
    },
    input:{
        flex:1,
        marginLeft:20,
        color:colors.black
    }
})

export default InputElement;
