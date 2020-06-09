/*

import React from 'react'
import {enableScreens} from "react-native-screens";

// react-redux
import { Provider } from 'react-redux'
import store from './store'

// react-navigation
import { createAppContainer, createSwitchNavigator, createNavigationContainer } from 'react-navigation';
import BottomTabNavigator from './src/navigations/BottomTabNavigator';

// import Screen
import Splashscreen from './src/Screens/Splashscreen'
import {HomeStack} from './src/navigations/HomeNavigator'
import {DetailStack} from './src/navigations/DetailNavigator'
import {AboutStack} from './src/navigations/AboutNavigator'

// v5
import { Provider as PaperProvider, BottomNavigation } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


 /* const AppSwitchNavigator = createSwitchNavigator({
    'Splash' : {screen : Splashscreen},
    'Tab'    : {screen : BottomTabNavigator},
  },
  {
   initialRouteName : 'Splash'
  });

  const AppContainer = createAppContainer(AppSwitchNavigator);
  */
  
 /* const Stack = createStackNavigator();

  enableScreens(); 
 
  // const NavigationContainer = createNavigationContainer(Stack)
  
  export default function App() {
    return (
      
      <Provider store={store}>
          <PaperProvider>
             <NavigationContainer>
                <Stack.Navigator initialRouteName="Splash" component={Splashscreen}>
                  <Stack.Screen name="Home" component={HomeStack}/>
                  <Stack.Screen name="Detail" component={DetailStack}/>
                  <Stack.Screen name="About" component={AboutStack}/>
                 </Stack.Navigator>
             </NavigationContainer>
           </PaperProvider>
       </Provider>
        
      
    )
  }

  */

import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';

import HomeScreen from './src/Screens/HomeScreen';
import DetailScreen from './src/Screens/DetailScreen';
import AboutScreen from './src/Screens/AboutScreen';
import Splashscreen from './src/Screens/Splashscreen'

import HomeStackScreen from './src/navigations/HomeNavigator';


import { Provider } from 'react-redux'
import store from './store'
// import { State } from 'react-native-gesture-handler';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

/* function HomeStackScreen() {
 return (
   <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen}/> 
    <Stack.Screen name="Details" component={DetailScreen} />
    <Stack.Screen name="About" component={AboutScreen} />
   </Stack.Navigator>
  );
}
*/
function DetailStackScreen() {
  return (
    <Stack.Navigator initialRouteName="Detail">
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
}

function AboutStackScreen() {
  return (
    <Stack.Navigator initialRouteName="About">
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>

  );
}

function BottomNav() {
  return (
    <Tab.Navigator>
           <Tab.Screen name="Home" component={HomeStackScreen} />
           <Tab.Screen name="Detail" component={DetailStackScreen} />
           <Tab.Screen name="About" component={AboutStackScreen}/>
    </Tab.Navigator>
    );
}

export default function App() {
   
  return (
    <Provider store={store}>
      <PaperProvider>
         <NavigationContainer >
            <BottomNav/>
         </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

/* <Tab.Screen name="TabSreen" component={TabScreen}/>  */
/* <HomeStack.Screen name="Splash" component={Splashscreen} /> */

/*
const RootStack = createStackNavigator();

function RootStackScreen() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Splash" component={Splashscreen}/>
      <RootStack.Screen name="Home" component={HomeScreen} /> 
    </RootStack.Navigator>
    

  );
}
*/