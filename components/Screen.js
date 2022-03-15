import React from 'react';
import { View,StyleSheet } from 'react-native';

function Screen({children}) {
  return(
      <View style={styles.container} >
          {children}
      </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:20,
    
    }
})

export default Screen;
