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
    paddingTop: 6,
    paddingBottom:12
  },
  row: {
    flex: 1,
    flexDirection: 'column',
    paddingBottom: 2,
  },
  rowHeader: {
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row',
    marginLeft: 0,
  },
  date: {
    justifyContent: 'flex-start',
    fontSize: 11,
    color: '#999999',
    fontWeight: '500'
  },
  location: {
    justifyContent: 'flex-end',
    fontSize: 11,
    color: '#999999',
    fontWeight: '500'
  },
  rowBody: {
    marginLeft: 0,
    marginTop: 12,
    flexDirection: 'column',
  },
  entryText: {
    justifyContent: 'flex-start',
    fontSize: 15,
    fontWeight: '500',
    color:"#424242",
  },
});

var Entry = (props) => (
  <View style={ styles.container }>
    <View style={ styles.row }>
      <View style={ styles.rowHeader }>
        <Text style={ styles.date }>
          { parseDate(props.createdAt) }
        </Text>
        <Text style={ styles.location }>
          { props.location }
        </Text>
      </View>
      <View style={ styles.rowBody }>
        <Text style={ styles.entryText }>
          { props.text }
        </Text>
      </View>
    </View>
  </View>
);

module.exports = Entry;

var parseDate = (date) => {
  date = new Date(date);
  return DateFormatter(date, "ddd, mmm d");
};