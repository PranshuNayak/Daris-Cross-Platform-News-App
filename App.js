import { StyleSheet} from "react-native";
import React from "react";
import CurrentScreen from "./screens/CurrentScreen";
import { ContextProvider } from "./context/userContext";


export default function App() {
  
   return(
     <ContextProvider>
       <CurrentScreen/>
     </ContextProvider>
   )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#034694",
  },
});
