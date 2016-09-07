import React, { Component } from 'react';
import DateFormatter from 'dateformat';

import {
  StyleSheet,
  Text,
  TextInput,
  ListView,
  View,
  Dimensions
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * .9,
    flex: 1, 
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    padding: 10
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 3
  },
  date: {
    fontSize: 12,
    color: 'green'
  },
  activeTitle: {
    color: 'red',
  },
  row: {
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

var Entry = ( props ) => (
  <View style={styles.container}>
    <View style={styles.row}>
      <Text style={styles.date}>
        { parseDate(props.createdAt) }
      </Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.title}>
        {props.text}
      </Text>
    </View>
  </View>  
);

module.exports = Entry;

var parseDate = (date) => {

  date = new Date(date); 

  return DateFormatter(date, "dddd, mmmm dS, yyyy, h:MM:ss TT");

};