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
          'Do you wish to accept this friend request so they can view your private entries?',
          [
            {text: 'Yes', onPress: () => props.acceptFriend(props.requestId)},
            {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'}
          ]
        )}>Fullname:  { props.fullname }</Text>
    </View>

  )
};


module.exports = Request;