import React from 'react';
import { TouchableOpacity,Text,StyleSheet } from 'react-native';

function PickerItem({item,onPress}) {
  return (
      <TouchableOpacity onPress={onPress} >
          <Text style={styles.text}>{item.name}</Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    text:{
        fontSize:17,
        marginLeft:15,
        marginVertical:10,
    }
})

export default PickerItem;
