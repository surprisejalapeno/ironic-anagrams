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
    borderBottomWidth: 0.5,
    borderColor: '#cccccc',
    paddingTop:12,
    paddingBottom:12
  },
  date: {
    position: 'absolute',
    alignSelf: 'center',
    fontSize: 11,
    color: '#999999',
    flexDirection: 'row',
    fontWeight: '500'
  },
  position: {
    marginLeft: 200,
    position: 'absolute',
    alignSelf: 'center',
    fontSize: 11,
    color: '#999999',
    flexDirection: 'row',
    fontWeight: '500'
  },
  entryText: {
    flex: 1,
    position: 'relative',
    marginTop: 20,
    flexDirection: 'column',
    fontSize: 15,
    fontWeight: '500',
    color:"#424242",
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingBottom: 2,
  }
});

var Entry = (props) => (
  <View style={ styles.container }>
    <View style={ styles.row }>
      <Text style={ styles.date }>
        { parseDate(props.createdAt) }
      </Text>
      <Text style={ styles.position }>
        { props.position }
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
  return DateFormatter(date, "ddd, mmm d");
};