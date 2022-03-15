import Screen from '../components/Screen';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import CategoryScreen from '../components/CategoryScreen';





const Tab = createMaterialTopTabNavigator();


const all = ()=>(
    <CategoryScreen screenName='allNews' />
)

const business = ()=>(
    <CategoryScreen screenName='business' />
)

const health = ()=>(
    <CategoryScreen screenName='health' />
)

const science = ()=>(
    <CategoryScreen screenName='science' />
)

const entertainment = ()=>(
    <CategoryScreen screenName='entertainment' />
)

const sports = ()=>(
    <CategoryScreen screenName='sports' />
)

const technology = ()=>(
    <CategoryScreen screenName='technology' />
)

const AllScreensNavigator = ()=>{
    
    return(
        <Screen>
       
       
       <Tab.Navigator 
    screenOptions={{
        tabBarStyle:{backgroundColor:'#034694'},
        tabBarLabelStyle:{color:'white',fontSize:15,textTransform:'capitalize'},
        tabBarItemStyle:{width:150,height:50},
        tabBarScrollEnabled:true
    }}
    
    >
        <Tab.Screen name='All' component={all}/>
        <Tab.Screen name='Business' component={business} />
        <Tab.Screen name='Entertainment' component={entertainment} />
        <Tab.Screen name='Health' component={health} />
        <Tab.Screen name='Science' component={science} />
        <Tab.Screen name='Sports' component={sports} />
        <Tab.Screen name='Technology' component={technology} />
    </Tab.Navigator>
      
        
    </Screen> 

    )
}

 

export default AllScreensNavigator;