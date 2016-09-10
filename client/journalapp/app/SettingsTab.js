// app/index.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  ListView,
  View,
  AsyncStorage
} from 'react-native';

import Button from 'react-native-button';

export default class SettingsTab extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      username: ''
    }
    AsyncStorage.getItem('@MySuperStore:username', (err, username) => {
      this.setState({
        username: username
      });
    });
  };

  render() {

     return (
        <View>
        <Text>Logged in as: {this.state.username} </Text>
        <Button onPress= { () => this.props.signOut() }>Sign Out</Button>
        </View>

     )
   }
}

