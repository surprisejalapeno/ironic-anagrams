import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  ListView,
  View
} from 'react-native';

// VB: Refactored require to use import, for consistency
import Entry from './Entry';

var EntryList = ({entries}) => (
    <ListView style ={styles.container}
       dataSource={entries}
       renderRow={ (rowData) =>
          <Entry text={ rowData.text } createdAt={ rowData.createdAt }/>

        }/>
)


module.exports = EntryList;

// marginBottom allows space for the lower navbar
var styles = StyleSheet.create({
  container: {
    position:'relative',
    paddingTop:10, 
    marginBottom: 37.5
  }
})