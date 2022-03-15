import React from 'react';
import { TouchableOpacity,StyleSheet, Text,Dimensions } from 'react-native';
import colors from '../config/colors';
import { useFormikContext } from 'formik';
const {width} = Dimensions.get('window');

function SubmitButton({title}) {
    const {handleSubmit} = useFormikContext();
  return (
      <TouchableOpacity style={styles.button} onPress={handleSubmit} >
          <Text style={styles.text} >{title}</Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button:{
        width:width-20,
        height:50,
        borderWidth:1,
        backgroundColor:colors.black,
        borderRadius:20,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        marginVertical:15
    },
    text:{
        color:colors.white,
        fontSize:20
    }
})

export default SubmitButton;
