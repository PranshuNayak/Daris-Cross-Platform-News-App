
import { NavigationContainer } from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack'
const Stack = createStackNavigator();
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp';

const AuthNavigator = ()=>(
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name='Signin' component={SignIn} />
        <Stack.Screen name='Signup' component={SignUp}/>
        </Stack.Navigator>
    </NavigationContainer>
)

export default AuthNavigator