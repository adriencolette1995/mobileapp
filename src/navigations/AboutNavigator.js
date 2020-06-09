import React from 'react';

// importing screens
import HomeScreen from '../Screens/HomeScreen'
import DetailScreen from '../Screens/DetailScreen'
import AboutScreen from '../Screens/AboutScreen'

//v5
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function AboutStackScreen() {
  return (
    <Stack.Navigator initialRouteName="About" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>

  );
}