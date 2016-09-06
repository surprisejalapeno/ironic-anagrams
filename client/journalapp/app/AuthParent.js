import React, { Component } from 'react';
import {
  StyleSheet,
  Navigator,
  Text,
  View,
  AsyncStorage
} from 'react-native';

import Tabs from 'react-native-tabs';

import SignupTab from './SignupTab';
import LoginTab from './LoginTab';


export default class AuthParent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 'LoginTab'
    };
  }

  renderTab() {
    if (this.state.page === "SignupTab") return <SignupTab updateStatus={this.props.updateStatus} />;
    if (this.state.page === "LoginTab") return <LoginTab updateStatus={this.props.updateStatus} />;
  }

  render() {

    const { page } = this.state;

    return (
        <View style={styles.container}>
        <Text>{page}</Text>

        {this.renderTab()}

          <Tabs
            selected={page}
            style={styles.tabbar}
            selectedStyle={{color:'red'}} onSelect={el=>this.setState({page:el.props.name})}>
              <Text name="LoginTab">Log In</Text>
              <Text name="SignupTab">Sign Up</Text>
          </Tabs>

        </View>
    );
  }


};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabbar: {
    backgroundColor:'white',
    height: 64,
    borderTopColor: 'red',
    borderTopWidth: 2
  },
  textinput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1

  }
});