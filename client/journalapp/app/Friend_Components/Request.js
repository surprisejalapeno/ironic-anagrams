import React, { Component } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  ListView,
  View,
  TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/RequestStyles';

var Request = (props) => {
  return (

    <TouchableHighlight onPress={()=> Alert.alert(
                'Friend Request',
                'Do you wish to accept this friend request so they can view your private entries?',
                [
                  {text: 'Yes', onPress: () => props.acceptFriend(props.requestId)},
                  {text: 'No', onPress: () => props.rejectFriend(props.requestId)}
                ]
              )}>

    <View style={styles.container}>
      <View style={ styles.row }>
            <Text style={ styles.bodyText }>{ props.fullname }</Text>
            <Icon style= {styles.arrow} name="navigate-next" ></Icon>
          </View>
      </View>
    </TouchableHighlight>

  )
};

module.exports = Request;
