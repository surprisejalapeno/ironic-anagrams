import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  AsyncStorage,
  Navigator,
  ListView, 
  Dimensions
} from 'react-native';

import Button from 'react-native-button';


const styles = StyleSheet.create({
  textinput: {
    height: 40
  },
  container: {
    width: Dimensions.get('window').width * .9,
    paddingTop: 70
  },
  fadedText: {
    fontSize: 16,
    color: 'gray',
    fontWeight: 'bold',
  }
});

export default class FriendScene extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  };

  // value={this.state.text}

  render() {
    return (
      <View style={ styles.container }>
        <Button onPress={ ()=>{ this.props.navigator.pop() } }> Back </Button>
        <TextInput
            placeholder= 'What did you do today?'
            style={[styles.textinput, styles.fadedText]}
            onChangeText={ (text) => this.props.updateEntry(text) } />
      </View>
    )
  }
}