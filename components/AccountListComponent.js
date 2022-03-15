import React from 'react';
import { Text, View ,StyleSheet} from 'react-native';
import IconComponent from './IconComponent';


function AccountListComponent({icon,text}) {
  return (
      <View style={styles.container}>
        <IconComponent icon={icon}/>
        <Text style={styles.text}>{text}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    height:50,
    alignItems:'center',
    
  },
  text:{
    marginLeft:10,
    fontSize:15,
    color:'white'
  }
 
})

export default AccountListComponent;
