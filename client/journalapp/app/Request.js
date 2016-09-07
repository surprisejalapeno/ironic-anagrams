import React, { Component } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  ListView,
  View
} from 'react-native';

var Request = (props) => {
  return (
    <View>
      <Text onPress={()=> Alert.alert(
          'Friend Request',
          'Do you wish to accept this friend request so they can view your private entires?',
          [
            {text: 'Yes', onPress: () => console.log('Ask me later pressed')},
            {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'}
          ]
        )}>Fullname: { props.fullname } Username: { props.username }</Text>
    </View>

  )
};


module.exports = Request;