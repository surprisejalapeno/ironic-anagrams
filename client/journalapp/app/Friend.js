import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  ListView,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons'

var Friend = (props) => {

  return (
    <View style={styles.container}>
      <View style={ styles.row } >
        <Text style={ styles.bodyText } onPress={()=>{ props.navigator.push({title: 'FriendPage', friendId: props.id }) }}>
        { props.fullname }
        <Icon name="keyboard-arrow-right" ></Icon>
        </Text>
      </View>
    </View>

  )
};

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa'
  },
  bodyText: {
    flex: 1,
    position: 'relative',
    flexDirection: 'column',
    fontSize: 14,
    fontWeight: '400',
    color:"#666666",
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop:12,
    paddingBottom:12,
    marginLeft:12,
    marginRight:12,
    borderBottomWidth: 0.5,
    borderColor: '#cccccc',
  }
});

module.exports = Friend;