import React, {Component} from 'react';
import { View, Image, StyleSheet} from 'react-native';

// font-awesome library
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';



export default class Splashscreen extends React.Component {
  
 
  static navigationOptions = {
    headerMode: 'none'
  }

  static loadLibrairies() {
  library.add(fas);
  }

 async componentDidMount() {
 
  Splashscreen.loadLibrairies()
  
  const data = await this.navigateToHome();
  if (data !== null) {
  this.props.navigation.navigate('Home');
  }}
  navigateToHome = async () => {
  
  const wait = time => new Promise((resolve) => setTimeout(resolve, time));
  return wait(2000).then(() => this.props.navigation.navigate('Home'))
  };

  render() {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffe4c4',  /* ou '#ECAA4A',*/ padding: 7,}}>
       <Image style={{ width: 350, height: 300,}} source={require('../assets/logo_couleur.png')}/>
    </View>
   );
  }
}
