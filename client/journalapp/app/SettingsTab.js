// app/index.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  ListView,
  View
} from 'react-native';

import Button from 'react-native-button';

export default class SettingsTab extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  };

  render() {

     return (
        <View>
        <Button onPress= { () => this.props.signOut() }>Sign Out</Button>
        </View>

     )
   }
}

