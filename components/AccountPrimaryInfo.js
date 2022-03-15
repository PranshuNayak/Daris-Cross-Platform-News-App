import React,{useContext} from 'react';
import { Image, View,StyleSheet,Text } from 'react-native';

function AccountPrimaryInfo({name,email}) {
    
    
  return (
      <View>
          <Image source={require('../assets/obama.jpg')} style={styles.image} />
          <View style={styles.info}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.text}>{email}</Text>
          </View>
      </View>
  );
}

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:250
    },
    info:{
        position:'absolute',
        left:20,
        bottom:10,
        zIndex:100
    },
    name:{
        color:'white',
        fontSize:25
    },
    text:{
        color:'#A9A9A9'
    }
})

export default AccountPrimaryInfo;
