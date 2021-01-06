import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeedScreen from './src/screens/Feed/FeedScreen'
import ProfileScreen from './src/screens/Profile/ProfileScreen'
import LogInScreen from './src/screens/LogIn/LogInScreen'
import SignUpScreen from './src/screens/SignUp/SignUpScreen'
import MessageScreen from './src/screens/Message/MessageScreen';
import EditScreen from "./src/screens/Edit/EditScreen";
import SettingsScreen from "./src/screens/Settings/SettingsScreen";
import { Ionicons } from "@expo/vector-icons";
import { firebase } from './src/firebase/config'


const Stack = createStackNavigator(); //Always has 2 props: Screen and Navigator. Navigator -> Screen
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name= "Feed" component={FeedScreen} options = {{tabBarIcon: ({ tintColor }) => <Ionicons name="ios-home" size={24} color={tintColor} />}} />
      <Tab.Screen name = "Profile" component={ProfileScreen} options = {{tabBarIcon: ({ tintColor }) => <Ionicons name="ios-person" size={24} color={tintColor} />}}/>
      <Tab.Screen name= "Message" component={MessageScreen} options = {{tabBarIcon: ({ tintColor }) => <Ionicons name="chatbox-outline" size={24} color={tintColor} />}}/>
    </Tab.Navigator>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data()
            setLoading(false)
            setUser(userData)
            // console.log("Pure UserData",userData)
          })
          .catch((error) => {
            setLoading(false)
          });
      } else {
        setUser(null)
        setLoading(false)
      }
    });
  }, []);

  if (loading) {
    return (
      <></>
    )
  }


  return (
    <NavigationContainer>
        {user ? (
          <Stack.Navigator>
            <Stack.Screen name = "Home" component={Home} />
            <Stack.Screen name = "Edit" component={EditScreen} />
            <Stack.Screen name = "Settings" component={SettingsScreen} />
          </Stack.Navigator>
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
