import React,{useState} from 'react'
import { View, StyleSheet, Image,Text,Dimensions, TouchableWithoutFeedback,Modal,Button } from 'react-native'

import CompleteArticle from './CompleteArticle'
import ModelButton from './ModelButton';

const {width} = Dimensions.get('window')
function Card({news}) {
    const [visibility,setVisibility] = useState(false);
    const handleVisibility = ()=>{
        setVisibility(!visibility);
    }

    return (
       
           <>
           <TouchableWithoutFeedback onPress={handleVisibility} >
                <View style={styles.container} >
                <View style={styles.highlight}>
            <Image source={{uri:news.urlToImage}} style={styles.image} />
            <View style={styles.content} >
                <Text style={styles.source}>{news.source.name}</Text>
            <Text style={styles.text} >{news.title}</Text>
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
        width:width
    },
    highlight:{
        width:width-20,
        height:400,
        borderRadius:30,
        marginTop:30,
        overflow:'hidden',
        alignSelf:'center'
    },
    image:{
        width:'100%',
        height:'100%',
    },
    content:{
        width:'100%',
        position:'absolute',
        bottom:20,
        left:10
    },
    text:{
        color:'white',
        fontSize:20
    },
    source:{
        color:'dodgerblue',
        fontSize:17,
        fontStyle:'italic',
        fontWeight:'bold'
    }
})

export default Card
