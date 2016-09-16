//StatsTab.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  Dimensions,
  Image
} from 'react-native';

import styles from '../styles/StatsTabStyles.js';

export default class StatsTab extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      username: ''
    };
    AsyncStorage.getItem('@MySuperStore:username', (err, username) => {
      this.setState({
        username: username
      });
    });
  };

  componentDidMount() {
    this.props.getStats(); //will need to pass username?
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text>This is example text</Text>
      </View>
    )
  }//end render
}