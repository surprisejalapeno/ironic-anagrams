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
      <Text onPress={()=>{ props.navigator.push({title: 'FriendPage', friendId: props.id });
                           props.updateFriend(props.fullname) } }>
      { props.fullname }
      </Text>
    </View>

  )
};


module.exports = Friend;