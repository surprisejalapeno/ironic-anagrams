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

var SplashScreen = require('./SplashScreen')

export default class AuthParent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 'Splash'
    };
  }

  renderTab() {
    if (this.state.page === "Splash") return <SplashScreen/>;
    if (this.state.page === "SignupTab") return <SignupTab updateStatus={this.props.updateStatus} />;
    if (this.state.page === "LoginTab") return <LoginTab updateStatus={this.props.updateStatus} />;

  }

  render() {

    const { page } = this.state;

    return (
        <View style={styles.container}>

        {this.renderTab()}

          <Tabs
            selected={page}
            style={styles.tabbar}
            selectedStyle={{color:'#333333'}} onSelect={el=>this.setState({page:el.props.name})}>
              <Text style={styles.tabbartext} name="SignupTab">Sign Up</Text>
              <Text style={styles.tabbartext} name="LoginTab">Login</Text>
          </Tabs>

        </View>
    );
  }


};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#f5f6f6',
  },
  tabbar: {
    backgroundColor:'#f5f6f6',
    height: 64,
    borderTopColor: '#878787',
    borderTopWidth: .5
  },
  tabbartext: {
   fontSize:15,
   fontWeight:'600',
   marginBottom:6,
   color:"#878787"
  }
});