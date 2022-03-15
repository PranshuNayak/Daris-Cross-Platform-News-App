import React from "react";
import { Text, View, StyleSheet, FlatList, ScrollView } from "react-native";

import Card from "./Card";


function Higlights({highlights,screenName}) {
 let count=0;
 
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Highlights from {screenName}</Text>
        <FlatList data={highlights} keyExtractor={item=>count++} horizontal
        pagingEnabled
        renderItem={({item})=>(<Card news={item} />
            )}
        />
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:450
  },
  heading: {
    color: "white",
    fontStyle: "italic",
    marginLeft:20,
    marginTop:10
  },
});

export default Higlights;
