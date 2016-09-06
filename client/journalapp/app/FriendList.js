import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  ListView,
  View
} from 'react-native';

import Friend from './Friend';

var FriendList = (props) => {
  return (

    <View>
      { props.friendList.map( (friend) => {
        return ( <Friend username={ friend.username } fullname={ friend.fullname } id={ friend.id } navigator={props.navigator}/> );
      }) }

    </View>

  )
};

module.exports = FriendList;