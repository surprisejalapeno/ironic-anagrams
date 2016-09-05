
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
    var newUser = JSON.stringify({
      username: this.state.username,
      fullname: this.state.fullname,
      password: this.state.password
    });

    console.warn("newUser is: ", newUser);

    fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: newUser
    });
  }

  updateFullname(val) {
    var newProp = {'fullname': val.text};
    this.setState(newProp);
  }

  updateUsername(val) {
    var newProp = {'username': val.text};
    this.setState(newProp);
  }

  updatePassword(val) {
    var newProp = {'password': val.text};
    this.setState(newProp);
  }

  getState(){
    this.state;
  }
  render() {

    return (
      <View>
        <SignupForm ref={'signupForm'} 
          submitUser={ this.submitUser.bind(this) } 
          updateFullname={ this.updateFullname.bind(this) }
          updateUsername={ this.updateUsername.bind(this) }
          updatePassword={ this.updatePassword.bind(this) }
          getState={ this.getState.bind(this) }
          />
      </View>

    );
  }
}
