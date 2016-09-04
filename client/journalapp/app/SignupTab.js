
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
    this.state = {
      username: '',
      fullname: '',
      password: ''
    };
  }

  submitUser() {
    console.log('Username is: ', this.state.username);
    // fetch('http://localhost:3000/api/users', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     this.state.newUser;
    //   })
    // });
  }

  _setState(prop, val) {
    this.setState({
      prop: val
    });
  }

  render() {

    return (
      <View>
        <SignupForm ref={'signupForm'} submitUser={ this.submitUser.bind(this) } setState={ this._setState.bind(this) }/>
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
