import React from 'react'
import { Image, ScrollView, Text, View ,StyleSheet} from 'react-native';
import NewsCard from '../components/NewsCard';
import {MaterialCommunityIcons} from '@expo/vector-icons'

function BookMarks() {
   
    return (
        <View style={styles.container}>
            <Text style={styles.text} >you have no bookmarks</Text>
           <Image source={require('../assets/neon_2.jpg')} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    image:{
        width:'100%',
        height:'100%'
    },
    text:{
        position:'absolute',
        color:'#45c8f7',
        fontSize:20,
        zIndex:100,
        textTransform:'capitalize',
        top:100,
        left:75,
        fontStyle:'italic'
    }
})

export default BookMarks
