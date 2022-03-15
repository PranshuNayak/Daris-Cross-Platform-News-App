import React,{useState} from 'react';
import { Text, TouchableOpacity,StyleSheet,Dimensions, Modal, Button,FlatList, View} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/colors';
import Screen from './Screen'
import PickerItem from './PickerItem';
import ModelButton from './ModelButton';

const {width} = Dimensions.get('window');

function PickerComponent({icon1,icon2,selectedItem,items,handleVisibility,visibility,selectItem}) {
    

   
  
    
  return (
      <>
      <TouchableOpacity onPress={handleVisibility} style={styles.container}>
         <>
         {icon1 && <MaterialCommunityIcons style={styles.icon} name={icon1} size={20} />}
          <Text style={styles.input}  >{selectedItem}</Text>
          {icon2 && <MaterialCommunityIcons style={styles.icon} name={icon2} size={20} />}
         </>
      </TouchableOpacity>
          <Modal visible={visibility} >
          <ModelButton onPress={handleVisibility} text='Sign up' />
            <FlatList
            data={items}
            keyExtractor={item => item.id}
            renderItem={({item})=>(<PickerItem item={item} onPress={()=>{selectItem(item.name)}} />)}
            ItemSeparatorComponent={()=>(<View style={styles.separator} />)}
            />
          </Modal>
      </>
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
        marginHorizontal:5
    },
    input:{
        flex:1,
        marginLeft:20,
        color:colors.black
    },
    separator:{
        width:'95%',
        alignSelf:'center',
        height:1,
        backgroundColor:colors.black,
    }
})

export default PickerComponent;
