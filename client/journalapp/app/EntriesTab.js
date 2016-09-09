
// app/index.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  ListView,
  View,
  AsyncStorage,
  Dimensions
} from 'react-native';

import DateFormatter from 'dateformat';
import Button from 'react-native-button';

import EntryList from './EntryList';


// For the stypes, the height: Dimensions.get('window').height - 60 and marginTop: 60 accommodates the navbar's height, as set in Main.js. 
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginTop: 70,
    height: Dimensions.get('window').height - 70,
    width: Dimensions.get('window').width * .93,
    paddingLeft:6,
    paddingRight:6,
  },
  header: {
    marginTop: 0,
    marginLeft: 0, 
  }, 
  date: {
    fontSize: 11,
    color: '#999999',
    fontWeight: '500'
  }, 
  headerButton: {
    justifyContent: 'center',
    width: 200,
    alignSelf: 'center'
  }
});


export default class EntriesTab extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    this.props.getEntries();
  }

  render() {

    return (
      <View style={ styles.container }>
        <View style={ styles.header }>
          <Text style={ styles.date }>{ DateFormatter(new Date(), "ddd, mmm d") }</Text>
          <Button style={ styles.headerButton } onPress={ () => this.props.navigator.push({ title: 'MessageScene'}) } > What did you do today? </Button>
        </View>
        <EntryList entries = { this.props.entries } />
      </View>

     )
  }
}

