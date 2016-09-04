import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Switch, 
  Slider, 
  Picker, 
  PickerIOS
} from 'react-native';

import Form from 'react-native-form'


var inputStyle = {
  height: 20, borderColor: 'gray', borderWidth: .5
};

var SignupForm = () => {

  return (
    <Form>
      <Text> Enter your first name: </Text>
      <TextInput style={ inputStyle } name="firstname" type="TextInput"/> 

      <Text> Enter your last name: </Text>
      <TextInput style={ inputStyle } name="lastname" type="TextInput"/> 

      <Text> Enter a username: </Text>
      <TextInput style={ inputStyle } name="username" type="TextInput"/> 

      <Text> Enter a password: </Text>
      <TextInput style={ inputStyle } name="password" type="TextInput"/> 
    </Form>
  );
};

module.exports = SignupForm;

