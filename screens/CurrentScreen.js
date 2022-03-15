import React,{useContext} from 'react'
import { globalContext } from '../context/userContext';
import BottomNavigator from '../navigators/BottomNavigator';
import AuthNavigator from '../navigators/AuthNaviagtor';
function CurrentScreen() {
    const {user} = useContext(globalContext)
    if(!user){
        return(<AuthNavigator/>)
    }
  return (<BottomNavigator/>)
}

export default CurrentScreen