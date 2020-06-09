import React from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { dummyAction } from '../actions/dummyAction'
 
class HomeScreen extends React.Component {

    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
        </View>
      );
    }  
}
 
export default connect(({dispatch}) => ({dispatch}))(HomeScreen)