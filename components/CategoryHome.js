import React from 'react'


import Higlights from './Higlights.js';
import TrendingNews from './TrendingNews.js';



function CategoryHome({highlights,trending,screenName,navigation}) {
   
    return (
        <>
        
        <Higlights highlights={highlights} screenName={screenName} />
        <TrendingNews trendingNews={trending} navigation={navigation}  />
       
        </>
    )
}

export default CategoryHome
