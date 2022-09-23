import { View, Text } from 'react-native';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPassword from '../screens/ForgotPassword';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import LandingScreen from '../screens/LandingScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator screenOptions={{headerShown: false}}> 
     <Stack.Screen name = "LandingScreen" component={LandingScreen} />
        <Stack.Screen name = "SignInScreen" component={SignInScreen} />
        <Stack.Screen name = "SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name = "ConfirmEmailScreen" component={ConfirmEmailScreen} />
        <Stack.Screen name = "ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name = "NewPassword" component={NewPasswordScreen} />

        <Stack.Screen name = "HomeScreen" component={HomeScreen} />


     </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation