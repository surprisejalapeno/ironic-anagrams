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
    <ListView
       dataSource={entries}
       renderRow={ (rowData) =>
          <Entry text={ rowData.text } createdAt={ rowData.createdAt }/>

        }/>
)


module.exports = EntryList;

