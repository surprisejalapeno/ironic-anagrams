import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Switch,
  Slider,
  Picker,
  PickerIOS,
  AsyncStorage,
  Image,
} from 'react-native';

var styles = require('./Styles')

var Splash = () => {

  return (
    <View style={styles.viewContainer}>
      <View style={styles.splashcontainer}>
        <Text style={styles.title}> Welcome To Your Story </Text>
        <Image style={styles.img} source={require('../images/App_Icon.png')}/>
        <Text style={styles.subtitle}> A simple journal app designed to help you remember what you did each day and keep in touch with close friends. </Text>
      </View>
    </View>
  )
};

module.exports = Splash;
