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

var styles = StyleSheet.create({
  container: {
    position:'relative',
    paddingTop:30
  }
})