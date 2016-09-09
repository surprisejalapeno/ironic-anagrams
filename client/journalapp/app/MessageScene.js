import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  AsyncStorage,
  Navigator,
  Dimensions
} from 'react-native';

import Button from 'react-native-button';


const styles = StyleSheet.create({
  container: {
    borderColor: 'gray',
    width: Dimensions.get('window').width * 1,
    paddingTop: 70, 
    marginLeft: 0
  },
  textinput: {
    fontSize: 14,
    height: Dimensions.get('window').height * .75, 
    marginLeft: Dimensions.get('window').width * .05,
    marginRight: Dimensions.get('window').width * .05,
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
  };

  componentDidMount(){
    this.props.updateEntry('');
  }

  render() {
    return (
      <ScrollView style={ styles.container }>
        <TextInput
            keyboardType='default'
            keyboardAppearance='light' 
            multiline={ true }
            placeholder= 'What did you do today?'
            style={ [styles.textinput, styles.fadedText] }
            maxLength={ 100 } 
            onChangeText={ (text) => this.props.updateEntry(text) } />
      </ScrollView>
    )
  }
}