import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  ListView,
  View
} from 'react-native';

var Friend = (props) => {

  return (
    <View>
      <Text>Fullname: { props.fullname } Username: { props.username }</Text>
      <Text onPress={()=>{ props.navigator.push({title: 'FriendPage' }) }}>Show Entries</Text>
    </View>

  )
};


module.exports = Friend;