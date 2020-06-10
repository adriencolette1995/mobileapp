import React from 'react';

// react-navigation
// import { createBottomTabNavigator } from 'react-navigation-tabs';

//v5
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// import font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import '../utils/fontawesome';

// importing Navigator
import HomeStackScreen from './HomeNavigator'
import DetailStackScreen from './DetailNavigator'
import AboutStackScreen from './AboutNavigator'

// import colors
import colors from '../styles/colors';

import HomeScreen from '../Screens/HomeScreen';
import DetailScreen from '../Screens/DetailScreen';
import AboutScreen from '../Screens/AboutScreen';


const Tab = createMaterialBottomTabNavigator();


export default function BottomNav() {
 
  return (
    <Tab.Navigator
    initialRouteName="Home"
    inactiveColor="#f0edf6"
    activeColor="#ff8c00"
    barStyle={{ backgroundColor: '#3cb371' }}
    >
           <Tab.Screen 
           name="Home" 
           component={HomeStackScreen} 
           options={{tabBarIcon: 'home-account',}}
           />
           <Tab.Screen 
           name="Detail" 
           component={DetailStackScreen} 
           options={{tabBarIcon: 'format-list-bulleted',}}
           />
           <Tab.Screen 
           name="About" 
           component={AboutStackScreen} 
           options={{tabBarIcon: 'information',}}
           />
    </Tab.Navigator>
    );
}

