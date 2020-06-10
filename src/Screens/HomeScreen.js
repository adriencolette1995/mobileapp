import React from 'react'
import { View, Text, Button, Image, ImageBackground, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { dummyAction } from '../actions/dummyAction'
import styles from '../styles/styles'


class HomeScreen extends React.Component {

  render() {
      return (
        <View style={{ flex:1, 
                       justifyContent: "center", 
                       alignItems: "center"}}
                       >
          <ImageBackground style={{flex: 1,
                                   width: '100%',
                                   height: '100%',
                                   justifyContent: "center",
                                   alignItems: "center",
                                   opacity: 0.7}} 
                                   source={require('../assets/img_background.jpg')}>
            <Text>Home Screen</Text>
          </ImageBackground>
        </View>
      );
    }  
}

/* const styles = StyleSheet.create({

  container: {
      flex: 1,
      // fontFamily: "-apple-system, BlinkMacSystemFont Segoe UI",
      justifyContent: "center",
      alignItems: "center",
      // backgroundColor: "orange"
  },
  backgroundImage:{
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      opacity: 0.3
  },
  backgroundImage2:{
      flex: 1,
      width: '100%',
      height: '100%',
      justifyContent: "center",
      alignItems: "center",
      opacity: 0.7
  }
  });

  */
 
export default connect(({dispatch}) => ({dispatch}))(HomeScreen)

// <Image style={ styles.backgroundImage } source={require('../assets/img_background.jpg')}/>