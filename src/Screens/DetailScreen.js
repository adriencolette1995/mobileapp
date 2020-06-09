import React from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
 
class DetailScreen extends React.Component {
    
  render() {
        const { dummyReducer = {} } = this.props
        const { text = ''} = dummyReducer
      
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Text>Detail Screen</Text>
        </View>
      );
    }  
  }
 
export default connect(({dummyReducer}) => ({dummyReducer}))(DetailScreen)