import React, { useEffect, useState } from "react";

// Navigation
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Screens
import FeedScreen from "./src/screens/Feed/FeedScreen";
import ProfileScreen from "./src/screens/Profile/ProfileScreen";
import LogInScreen from "./src/screens/Auth/LogIn/LogInScreen";
import SignUpScreen from "./src/screens/Auth/SignUp/SignUpScreen";
import MessageScreen from "./src/screens/Message/MessageScreen";
import EditScreen from "./src/screens/Edit/EditScreen";
import SettingsScreen from "./src/screens/Settings/SettingsScreen";

// Constants
import * as screens from "./src/static/constants/navConst";

//Firebase API
import { firebase } from "./src/firebase/config";
import { AuthProvider } from "./src/api/user/user";

//Always has 2 props: Screen and Navigator. Navigator -> Screen
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//Dummy
// let user = false;

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={screens.FEED}
        component={FeedScreen}
        options={{
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name="ios-home" size={24} color={tintColor} />
          ),
        }}
      />
      <Tab.Screen
        name={screens.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name="ios-person" size={24} color={tintColor} />
          ),
        }}
      />
      <Tab.Screen
        name={screens.MESSAGE}
        component={MessageScreen}
        options={{
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name="chatbox-outline" size={24} color={tintColor} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const usersRef = firebase.firestore().collection("users");
    firebase.auth().onAuthStateChanged((newUser) => {
      if (newUser) {
        usersRef
          .doc(newUser.uid)
          .get()
          .then((document) => {
            const userData = document.data();
            setLoading(false);
            setUser(userData);
          })
          .catch((error) => {
            setLoading(false);
          });
      } else {
        setUser(null);
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return <></>;
  }
  return (
    <NavigationContainer>
      <AuthProvider>
        {user ? (
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "hsla(165, 50%, 42%, 1.0)" },
            }}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name={screens.EDIT} component={EditScreen} />
            <Stack.Screen name={screens.SETTINGS} component={SettingsScreen} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "hsla(165, 50%, 42%, 1.0)" },
            }}
          >
            <Stack.Screen
              name={screens.LOGIN}
              component={LogInScreen}
              options={{
                title: "Sign In",
                headerTitleStyle: {
                  alignSelf: "center",
                  fontWeight: "bold",
                  fontSize: 25,
                },
              }}
            />
            <Stack.Screen
              name={screens.SIGNUP}
              component={SignUpScreen}
              options={{
                title: "Sign Up",
                headerTitleStyle: {
                  alignSelf: "center",
                  fontWeight: "bold",
                  fontSize: 25,
                },
              }}
            />
          </Stack.Navigator>
        )}
      </AuthProvider>
    </NavigationContainer>
  );
}
