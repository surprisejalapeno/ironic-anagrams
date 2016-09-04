
// app/index.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

// Refactored to use import instead of ES2015 require, for consistency 
import SignupForm from './SignupForm';

export default class SignupTab extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <View>
        <SignupForm />
      </View>

    );
  }
}

  // handleMessageSubmit() {
  //   var message = {text:this.state.text};
  //   console.log("Does this get ran?",this.state.text);

  //   fetch('http://zpdubmisbk.localtunnel.me/api/entries', {
  //      method: 'POST',
  //      headers: {
  //        //'Accept': 'application/json',
  //        'Content-Type': 'application/json',
  //      },
  //      body: JSON.stringify(message)
  //    })
  //     .then((response) => {
  //       console.log(response)
  //       this.getEntries();
  //     })
  //      .catch((error) => {
  //       console.warn("fetch error:", error)
  //     })
  // }
