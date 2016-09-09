
// app/index.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  ListView,
  View,
  AsyncStorage,
  Dimensions
} from 'react-native';

import Button from 'react-native-button';
// Refactored to use import instead of ES2015 require, for consistency

import EntryList from './EntryList';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width*.93,
    paddingLeft:6,
    paddingRight:6,
    marginTop: 60
  }
});


export default class EntriesTab extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    this.props.getEntries();
  }

  render() {

    return (
      <View style={ styles.container }>
        <Button onPress={ () => this.props.navigator.push({ title: 'MessageScene'}) } > What did you do today? </Button>
        <EntryList entries = { this.props.entries } />
      </View>

     )
   }
  }
