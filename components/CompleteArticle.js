import React,{useContext} from 'react';
import { Image, Text, View,StyleSheet, ScrollView,Button } from 'react-native';
import ModelButton from './ModelButton';
import BookmarkButton from './BookmarkButton';
import {globalContext} from '../context/userContext'
function CompleteArticle({news,onPress}) {
  const {user} = useContext(globalContext)
  return(
     <View style={styles.container}>
         <ScrollView>
             <View style={styles.topBar}>
             <ModelButton onPress={onPress} />
             <BookmarkButton article={news} user={user.email} />
             </View>
        <View style={styles.heading}>
        <Text style={styles.source} >{news.source.name}</Text>
         <Text style={styles.title} >{news.title}</Text>
         <Text style={styles.timeStamp} >{news.publishedAt}</Text>
        </View>
         <Image source={{uri:news.urlToImage}} style={styles.image} />
         <View style={styles.content}>
         <Text>{news.title} </Text>
         <Text>{news.description} </Text>
         <Text>{news.content}</Text>
         </View>
         
         </ScrollView>
     </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    topBar:{
        marginTop:10,
        width:'95%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    image:{
        width:'100%',
        height:300,
        marginVertical:10
    },
    heading:{
        paddingHorizontal:10
    },
    source:{
        color:'red',
        fontStyle:'italic',
        textTransform:'uppercase'
    },
    title:{
        fontWeight:'bold',
        fontSize:25,
    },
    timeStamp:{
        color:'#A9A9A9'
    },
    content:{
        paddingHorizontal:10
    }
})

export default CompleteArticle;
