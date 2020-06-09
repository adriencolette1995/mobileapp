import React from 'react';

// importing screens
import HomeScreen from '../Screens/HomeScreen'
import DetailScreen from '../Screens/DetailScreen'
import AboutScreen from '../Screens/AboutScreen'
import { BottomTabStack } from './BottomTabNavigator';

//v5
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function DetailStackScreen() {
  return (
    <Stack.Navigator initialRouteName="Detail" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
}