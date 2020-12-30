import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState} from 'react';
import { firebase } from "./firebase/config";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/Home/HomeScreen'
import ProfileScreen from './screens/Profile/ProfileScreen'
import LogInScreen from './screens/LogIn/LogInScreen'
import SignUpScreen from './screens/SignUp/SignUpScreen'
import MessageScreen from './screens/Message/MessageScreen';
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator(); //Always has 2 props: Screen and Navigator. Navigator -> Screen
const Tab = createBottomTabNavigator();

//Dummy
let user = false;

export default function App() {

 
  return (
    <NavigationContainer>
        {user ? (
          <Tab.Navigator>
            <Tab.Screen name= "Home" component={HomeScreen} options = {{tabBarIcon: ({ tintColor }) => <Ionicons name="ios-home" size={24} color={tintColor} />}} />
            <Tab.Screen name = "Profile" component={ProfileScreen} options = {{tabBarIcon: ({ tintColor }) => <Ionicons name="ios-person" size={24} color={tintColor} />}}/>
            <Tab.Screen name= "Message" component={MessageScreen} options = {{tabBarIcon: ({ tintColor }) => <Ionicons name="chatbox-outline" size={24} color={tintColor} />}}/>
          </Tab.Navigator>    
        ) : (
          <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'hsla(165, 50%, 42%, 1.0)'}}}>
            <Stack.Screen name = "LogIn" component={LogInScreen} 
            options={{ title: 'Sign In', headerTitleStyle : { alignSelf : 'center', fontWeight: 'bold', fontSize: 32}}} />
            <Stack.Screen name = "SignUp" component={SignUpScreen}
            options={{ title: 'Sign Up', headerTitleStyle : { alignSelf : 'center', fontWeight: 'bold', fontSize: 32}}} /> 
          </Stack.Navigator>
        )}
    </NavigationContainer> 
  );
}
