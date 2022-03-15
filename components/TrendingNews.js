import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";

import {Entypo} from '@expo/vector-icons'

import NewsCard from "./NewsCard";

function TrendingNews({ trendingNews,navigation }) {
  let count = 0;
  return (
    <View style={styles.container}>
      <View style={styles.heading} >
      <Text style={styles.category}>Latest News</Text>
      <TouchableWithoutFeedback onPress={()=> navigation.navigate('Articles')}  >
        <View style={styles.more}>
        <Text style={{color:'white'}} >See more</Text>
        <Entypo name="chevron-right" color='white' size={20}  />
        </View>
      </TouchableWithoutFeedback>
      </View>
      <ScrollView horizontal={true}>
        {
          trendingNews.map((item)=>(<NewsCard news={item} key={count++} />))
        }
         
      </ScrollView>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
      flex:1
  },
  heading:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'flex-end'
  },
  category: {
    color: "white",
    fontSize: 25,
  },
  placeholder: {
    color: "#E2E2DB",
  },
  more:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  }
});

export default TrendingNews;
