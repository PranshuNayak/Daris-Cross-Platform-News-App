import React from 'react';
import { FlatList, View,Text } from 'react-native';
import NewsCard from './NewsCard';
function CategoryArticle({articles}) {
  let count = 0;
  return (
      <View>
          
          <FlatList  pagingEnabled data={articles} keyExtractor={item => count++ } 
                renderItem={({item})=>(<NewsCard news={item} />)}
            />
      </View>
  );
}

export default CategoryArticle;
