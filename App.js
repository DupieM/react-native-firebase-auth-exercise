import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import SignInScreen from './screens/RegisterScreen';

// TODO: Navigation Container

const Stack = createNativeStackNavigator();

export default function App() {

  const [loggedIn, SetLoggedIn] = useState(false)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        SetLoggedIn(true)
        console.log("User logged in... " + user.email)
      } else {
        SetLoggedIn(false)
        console.log("No user logged in...")
      }  
    })

    return unsubscribe

  }, [])

  return (
      

    <>
      {loggedIn ? (
        <ProfileScreen />
      ) : (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="SignUp" component={SignInScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
      )}
    </>

    // <SignInScreen/>
  );
}

