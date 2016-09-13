import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  ListView,
  View,
  TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/FriendStyles';

var Friend = (props) => {

  return (
    <TouchableHighlight onPress={()=>{ props.navigator.push({title: 'FriendPage', friendId: props.id });
                                                               props.updateFriend(props.fullname) }}>
      <View style={styles.container}>
        <View style={ styles.row }>
          <Text style={ styles.bodyText } >
          { props.fullname }
          </Text>

          <Icon style= {styles.arrow} name="navigate-next" ></Icon>
        </View>
      </View>
    </TouchableHighlight>

  )
};

module.exports = Friend;