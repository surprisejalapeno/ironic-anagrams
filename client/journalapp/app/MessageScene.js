import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  AsyncStorage,
  Navigator,
  Dimensions
} from 'react-native';

import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/MaterialIcons'

const styles = StyleSheet.create({
  container: {
    borderColor: 'gray',
    width: Dimensions.get('window').width * 1,
    paddingTop: 70, 
    marginLeft: 0,
    backgroundColor: '#f5f6f6', 
  },
  bodyWidth: {
    marginLeft: Dimensions.get('window').width * .05,
    marginRight: Dimensions.get('window').width * .05,
  },
  fadedText: {
    fontSize: 16,
    color: 'gray',
    fontWeight: 'bold',
  }, 
  footer: {
    position: 'absolute', 
    marginLeft: 0,
    marginTop: 0, 
    flex: 1, 
    flexDirection: 'row', 
    backgroundColor: 'white',
    width: Dimensions.get('window').width,
    borderTopWidth: 1, 
    borderTopColor: 'rgba(175,175,175,.6)',
    height: 49, 
    paddingTop: 6, 

  },
  footerContent: {
    color:"#c7c7cc", 
    fontSize: 24
  },
  footerPadlock: {
    marginLeft: Dimensions.get('window').width * .08,
    width: Dimensions.get('window').width * .1,
  }, 
  footerArrow: {
    marginLeft: Dimensions.get('window').width * .3,
  },
  footerText: {
    fontSize: 16,
    marginLeft: Dimensions.get('window').width * .02,
    width: Dimensions.get('window').width * .46,
  }
});

export default class FriendScene extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      dynamicHeight: () => { return {height: Dimensions.get('window').height - 49 - 70}}
    };
  };

  componentDidMount(){
    this.props.updateEntry('');
  }

  moveUpForKeyboardShow(){
    setTimeout( ()=> {
      this.setState(
        { dynamicHeight : () => { return { height: Dimensions.get('window').height * .45 }} }
      );
    }, 200);
    
  }

  moveDownForKeyboardHide(){
    this.setState(
      { dynamicHeight : () => { return {height: Dimensions.get('window').height - 49 - 70}} }
    );
  }

  render() {
    return (
      <ScrollView style={ styles.container } ref='scrollView'>
        <TextInput
            keyboardType='default'
            keyboardAppearance='light' 
            multiline={ true }
            placeholder= 'What did you do today?'
            style={ [this.state.dynamicHeight(), styles.bodyWidth, styles.fadedText] }
            maxLength={ 100 }
            onChangeText={ (text) => this.props.updateEntry(text) }
            onFocus= { this.moveUpForKeyboardShow.bind(this) }
            onBlur= { this.moveDownForKeyboardHide.bind(this) }/>
        <View style={ [styles.bodyWidth, styles.footer] }>
          <Icon style={ [styles.footerContent, styles.footerPadlock] } name="lock-open"/>
          <Icon style={ [styles.footerContent, styles.footerArrow] } name="near-me"/>
          <Text style={ [styles.footerContent, styles.footerText] }>{ this.props.location }</Text>
        </View>
      </ScrollView>
    )
  }
}