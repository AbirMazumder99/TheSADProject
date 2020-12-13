import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/Home/HomeScreen'
import ProfileScreen from './screens/Profile/ProfileScreen'
import LogInScreen from './screens/LogIn/LogInScreen'
import SignUpScreen from './screens/SignUp/SignUpScreen'
import MessageScreen from './screens/Message/MessagingScreen';

const Stack = createStackNavigator(); //Always has 2 props: Screen and Navigator. Navigator -> Screen
// const Tab = createBottomTabNavigator();
export default function App() {
  let user = true;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name = "Profile" component={ProfileScreen} options={{ title: 'Abir'}} />
            <Stack.Screen name="Message" component={MessageScreen}/>
          </>
        ) : (
          <>
            <Stack.Screen name = "LogIn" component={LogInScreen} options={{ title: 'Hello'}} />
            <Stack.Screen name = "SignUp" component={SignUpScreen} /> 
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer> 
  );
}

{/* <Tab.Navigator initialRouteName="Home">
<Tab.Screen name="Home" component={HomeScreen} />
<Tab.Screen name="Profile" component={ProfileScreen} />
</Tab.Navigator> */}