import React from 'react';

// importing screens
import HomeScreen from '../Screens/HomeScreen'
import DetailScreen from '../Screens/DetailScreen'
import AboutScreen from '../Screens/AboutScreen'
import { BottomTabStack } from './BottomTabNavigator';


//v5
import { createNativeStackNavigator } from '@react-navigation/native-stack';


   const Stack = createNativeStackNavigator();

    export const AboutStack = () => {
        return (
            <Stack.Navigator initialRouteName="About">
                 <Stack.screen
                  name="About"
                  component={AboutScreen}
                  options={{ headerTitle: 'About'}}
                />
                <Stack.screen
                 name="Detail"
                 component={DetailScreen}
                 options={{ headerTitle: 'Detail'}}
                />
                <Stack.screen
                  name="Home"
                  component={HomeScreen}
                  options={{ headerTitle: 'Home'}}
                />
            </Stack.Navigator>
        );
    };