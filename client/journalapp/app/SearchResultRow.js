import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  ListView,
  View
} from 'react-native';

var SearchResultRow = (props) => {

  return (
    <View>
      <Text onPress={props.sendreq(props.id)}>
      { props.fullname }     |
      { props.username }
      </Text>
    </View>

  )
};


module.exports = SearchResultRow;