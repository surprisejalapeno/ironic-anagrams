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

    this.state = {
      text: ''
    };
  };

  postEntry(){
    AsyncStorage.getItem('@MySuperStore:token', (err, token) => {
      var message = {text:this.state.text};

      fetch('http://localhost:3000/api/entries', {
        method: 'POST',
        headers: {
         'Content-Type': 'application/json',
         'x-access-token': token
        },
        body: JSON.stringify(message)
      })
        .then((response) => {
          console.log(response)
          this.getEntries();
        })
          .catch((error) => {
            console.warn("fetch error:", error)
          });
    });

  }

  render() {
    return (
      <View style={ styles.container }>
        <Button onPress={ ()=>{ this.props.navigator.pop() } }> Back </Button>
        <TextInput
            placeholder= 'What did you do today?'
            style={[styles.textinput, styles.fadedText]}
            value={this.state.text}
            onChangeText={ (text) => this.setState({text})}
            onSubmitEditing= { this.postEntry.bind(this) } />
      </View>
    )
  }
}