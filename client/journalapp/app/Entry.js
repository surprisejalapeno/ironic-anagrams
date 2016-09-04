import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  ListView,
  View
} from 'react-native';

// VB: To utilize custom Entry component, read in the props from EntryList's instantiation, put them in the Text component
var Entry = ( props ) => (
  <Text>
    {props.text}
    {props.createdAt}
  </Text>
);

module.exports = Entry;

