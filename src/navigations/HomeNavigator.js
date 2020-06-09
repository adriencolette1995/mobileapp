import React from 'react';

// importing screens
import HomeScreen from '../Screens/HomeScreen';
import DetailScreen from '../Screens/DetailScreen';
import AboutScreen from '../Screens/AboutScreen';
import { BottomTabStack } from './BottomTabNavigator';


import { createStackNavigator } from '@react-navigation/stack';


//v5
import { createNativeStackNavigator } from '@react-navigation/native-stack';


/* const HomeNavigator = createStackNavigator(
    {
      'Home': {screen: HomeScreen},
      'Detail': {screen: DetailScreen},
      'About' :  {screen: AboutScreen},
    });

    export default HomeNavigator;
*/

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

export default function HomeStackScreen() {
 return (
   <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen}/> 
    <Stack.Screen name="Details" component={DetailScreen} />
    <Stack.Screen name="About" component={AboutScreen} />
   </Stack.Navigator>
  );
}



// const Stack = createNativeStackNavigator();

/* export const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.screen
             name="Home"
             component={HomeScreen}
             options={{ headerTitle: 'Home'}}
            />
            <Stack.screen
              name="Detail"
              component={DetailScreen}
              options={{ headerTitle: 'Detail'}}
            />
            <Stack.screen
              name="About"
              component={AboutScreen}
              options={{ headerTitle: 'About'}}
            />
        </Stack.Navigator>
    );
};

*/