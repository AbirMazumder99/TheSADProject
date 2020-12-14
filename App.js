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
// let user = true;

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
          })
          .catch((error) => {
            setLoading(false)
          });
      } else {
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

{/* <Tab.Navigator initialRouteName="Home">
<Tab.Screen name="Home" component={HomeScreen} />
<Tab.Screen name="Profile" component={ProfileScreen} />
</Tab.Navigator> */}