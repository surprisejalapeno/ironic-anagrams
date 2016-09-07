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
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    padding: 10
  },
  date: {
    position: 'absolute',
    marginTop: .5,
    alignSelf: 'center',
    fontSize: 12,
    color: 'green',
    flexDirection: 'row',
  },
  entryText: {
    flex: 1,
    position: 'relative',
    marginTop: 20,
    flexDirection: 'column',
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 3
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 2,
  }
});

var Entry = (props) => (
  <View style={ styles.container }>
    <View style={ styles.row }>
      <Text style={ styles.date }>
        { parseDate(props.createdAt) }
      </Text>
      <Text style={ styles.entryText }>
        { props.text }
      </Text>
    </View>
  </View>  
);

module.exports = Entry;

var parseDate = (date) => {

  date = new Date(date); 

  return DateFormatter(date, "dddd, mmmm dS, yyyy, h:MM:ss TT");

};