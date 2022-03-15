import React,{useEffect,useState}  from 'react';


import {createStackNavigator} from '@react-navigation/stack'
import CategoryHome from './CategoryHome';
import CategoryArticles from './CategoryArticle'
import {fetchHeadlines} from '../api/Headlines';

const Stack = createStackNavigator();




function CategoryScreen({screenName}) {

    const [news,setNews] = useState({highlights:[],trending:[],everything:[]});
    const fetchNews = async ()=>{
        const articles = await fetchHeadlines(screenName);
        setNews({
            highlights:articles.slice(0,5),
            trending:articles.slice(6,11),
            everything:articles
        })
    }

    useEffect(()=>{
        fetchNews();
    },[])

    const homeScreen = ({navigation})=>(
        <CategoryHome highlights={news.highlights} trending={news.trending} screenName={screenName} navigation={navigation} />
    )

    const articleScreen = ()=>(
        <CategoryArticles category={screenName} articles={news.everything} />
    )

  return (
        
            <Stack.Navigator >
                <Stack.Screen name={screenName} component={homeScreen} 
                options={{
                    headerShown:false
                }}
                />
                <Stack.Screen name="Articles" component={articleScreen} 
                options={{
                    headerStyle:{backgroundColor:'#034694'},
                    headerTintColor:'white'
                }}
                />
            </Stack.Navigator>
        
  )
}

export default CategoryScreen;
