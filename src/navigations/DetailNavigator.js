import React from 'react';

// importing screens
import HomeScreen from '../Screens/HomeScreen'
import DetailScreen from '../Screens/DetailScreen'
import AboutScreen from '../Screens/AboutScreen'
import { BottomTabStack } from './BottomTabNavigator';

//import { createStackNavigator } from 'react-navigation-stack';

//v5
import { createStackNavigator } from '@react-navigation/stack';

/* const DetailNavigator = createStackNavigator(
    {
      'Detail': {screen: DetailScreen},
      'Home': {screen: HomeScreen},
      'About': {screen: AboutScreen},
    });

    export default DetailNavigator;
*/


    export const DetailStack = () => {
        return (
            <Stack.Navigator initialRouteName="Detail">
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
                <Stack.screen
                  name="About"
                  component={AboutScreen}
                  options={{ headerTitle: 'About'}}
                />
            </Stack.Navigator>
        );
    };