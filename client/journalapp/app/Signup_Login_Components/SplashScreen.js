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

import styles from '../styles/AuthGeneralStyles';

var Splash = () => {

  return (
    <View style={styles.viewContainer}>
      <View style={styles.splashcontainer}>
        <Image style={styles.img} source={require('../images/App_Icon.png')}/>
        <Text style={styles.title}> Welcome To Your Story </Text>
        <Text style={styles.subtitle}> A simple journal app designed to help you remember what you did each day and keep in touch with close friends. </Text>
      </View>
    </View>
  )
};

module.exports = Splash;
