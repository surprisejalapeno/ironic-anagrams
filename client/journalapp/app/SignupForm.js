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
import Button from 'react-native-button';


var inputStyle = {
  height: 20, borderColor: 'gray', borderWidth: .5
};

var SignupForm = ( props ) => {

  return (
    <View>
      <Form>
        <Text> Enter your first name: </Text>
        <TextInput 
          onChangeText= { (text) => this.setState({text}) }
          value= {this.state.text}
          style= { inputStyle } 
          name="firstname" 
          type="TextInput"/> 

        <Text> Enter your last name: </Text>
        <TextInput 
          onChangeText= { (text) => this.setState({text}) }
          value= {this.state.text}
          style= { inputStyle } 
          name="lastname" 
          type="TextInput"/> 

        <Text> Enter a username: </Text>
        <TextInput 
          onChangeText= { (text) => this.setState({text}) }
          value= {this.state.text}
          style= { inputStyle } 
          name="username" 
          type="TextInput"/> 

        <Text> Enter a password: </Text>
        <TextInput 
          onChangeText= { (text) => this.setState({text}) }
          value= {this.state.text}
          style= { inputStyle } 
          name="password" 
          type="TextInput"/> 

      </Form>
      <Button
        style={{fontSize: 20, color: 'green'}}
        styleDisabled={{color: 'red'}}
        onPress={ () => props.submitUser() }>
        Submit
      </Button>
    </View>
  );
};

module.exports = SignupForm;

