import React,{useState} from 'react'
import { Text ,View,StyleSheet,Image,Dimensions, TouchableWithoutFeedback, Modal, Button } from 'react-native'

import CompleteArticle from './CompleteArticle'


const {width,height} = Dimensions.get('window')

function NewsCard({news}) {

    const [visibility,setVisibility] = useState(false);
    const handleVisibility = ()=>{
        setVisibility(!visibility);
    }

    return (
      
           <>
           <TouchableWithoutFeedback onPress={handleVisibility} >
                <View style={styles.container} >
        <Image source={{uri:news.urlToImage}} style={styles.image} />
        <View style={styles.content} >
            <Text style={styles.text} >{news.title}</Text>
            <View style={styles.publishInfo} >
                <Text style={styles.mediaHouse} >{news.source.name}</Text>
                
                <Text style={styles.date} >{news.publishedAt}</Text>
            </View>
        </View>
        </View>
           </TouchableWithoutFeedback>

           <Modal visible={visibility} >
              
               <CompleteArticle news={news} onPress={handleVisibility} />
           </Modal>
           </>
       
       
    )
}

const styles = StyleSheet.create({
    container:{
        width:width,
        paddingHorizontal:5,
        alignSelf:'center',
        flexDirection:'row',
        marginVertical:10,
        alignItems:'center'
    },
    image:{
        width:125,
        height:125,
        resizeMode:'cover',
        borderRadius:10
    },
    content:{
        flex:1,
        marginLeft:5,
        justifyContent:'flex-start'
    },
    text:{
        color:'white',
        fontSize:18,
        fontWeight:'bold'
    },
    publishInfo:{
        width:205,
        marginTop:10,
        
    },
    mediaHouse:{
        color:'red',
        fontStyle:'italic',
        
    } ,
    date:{
        color:'white'
    }
   
})

export default NewsCard
