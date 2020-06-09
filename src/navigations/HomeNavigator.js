import React from 'react';

// importing screens
import HomeScreen from '../Screens/HomeScreen';
import DetailScreen from '../Screens/DetailScreen';
import AboutScreen from '../Screens/AboutScreen';
import { BottomTabStack } from './BottomTabNavigator';


import { createStackNavigator } from '@react-navigation/stack';


//v5
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createStackNavigator();

export default function HomeStackScreen() {
 return (
   <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeScreen}/> 
    <Stack.Screen name="Details" component={DetailScreen} />
    <Stack.Screen name="About" component={AboutScreen} />
   </Stack.Navigator>
  );
}
