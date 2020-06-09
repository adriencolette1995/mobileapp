import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { Provider as PaperProvider } from 'react-native-paper';

import BottomNav from './src/navigations/BottomTabNavigator';

//icon
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';


import { Provider } from 'react-redux'
import store from './store'
// import { State } from 'react-native-gesture-handler';

export default class App extends React.Component {

  static loadLibrairies() {
    library.add(fas);
    App.loadLibrairies();
    }

  render() {

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
}