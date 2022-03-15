import React from 'react'
import {TouchableOpacity,Alert} from 'react-native'
import {Entypo} from '@expo/vector-icons'
function BookmarkButton({article,user}) {
    const handleSave = ()=>{
        
    }
    const alert = ()=>{
        Alert.alert("Bookmark","Want to save this article?",[
            {text:'Yes',onPress:handleSave},
            {text:"No"}
        ])
    }
  return (
    <TouchableOpacity onPress={alert}>
        <Entypo name='bookmark' size={25}/>
    </TouchableOpacity>
  )
}

export default BookmarkButton