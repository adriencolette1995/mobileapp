import React from 'react';

// react-navigation
// import { createBottomTabNavigator } from 'react-navigation-tabs';

//v5
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// import font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

// importing Navigator
import HomeNavigator from './HomeNavigator'
import DetailNavigator from './DetailNavigator'
import AboutNavigator from './AboutNavigator'

// import colors
import colors from '../styles/colors';

import HomeScreen from '../Screens/HomeScreen';
import DetailScreen from '../Screens/DetailScreen';
import AboutScreen from '../Screens/AboutScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const ICON_SIZE = 22;

    const focusableIoniconFactory = icon => {
	  const focusedIcon = ({ focused }) => (
		  <FontAwesomeIcon
			icon={icon}
			size={ICON_SIZE}
			color={focused ? colors.primary : colors.secondary}
		  />
	  );

	return focusedIcon;
};

const Tab = createBottomTabNavigator();

    export const BottomTabStack = () => {
            <Tab.Navigator>
              <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  tabBarIcon: 'home-account',
                }}
              />
              <Tab.Screen
                name="Detail"
                component={DetailScreen}
                options={{
                  tabBarIcon: 'bell-outline',
                }}
              />
              <Tab.Screen
                name="About"
                component={AboutScreen}
                options={{
                  tabBarIcon: 'message-text-outline',
                }}
              />
            </Tab.Navigator>
    };
