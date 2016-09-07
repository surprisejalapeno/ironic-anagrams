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
    <View style={styles.rowContainer}>
      <Text
      onPress={props.sendreq(props.id)}
      style={styles.rowText} >
      { props.fullname }
      </Text>
    </View>

  )
};


module.exports = SearchResultRow;

const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rowText: {
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 14,
    alignItems: 'flex-start'
  }
});