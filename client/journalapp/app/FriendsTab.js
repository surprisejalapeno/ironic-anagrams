// app/index.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  AsyncStorage,
  Navigator
} from 'react-native';

import FriendList from './FriendList';
import EntryList from './EntryList';

export default class FriendsTab extends Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.state = {
      friendList: [{username:"test", fullname:"test"}]
    };
  };

  componentWillMount(){
    console.log("when does this happen")
    this.getFriends();
  }

  getFriends(){
    AsyncStorage.getItem('@MySuperStore:token', (err, token) => {
      fetch('http://localhost:3000/api/friends', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': token
        }
      })    
      .then( resp => { resp.json()
        .then( json => {
          this.setState({
            friendList: json
          })
        })
        .catch((error) => {
          console.warn("fetch error on getrequest:", error)
        });
      });
    });
  }

  navigatorRenderScene(route, navigator) { 
    _navigator = navigator;
    if (route.title === 'Main View') {
      console.log('inside navigatorRenderScene Main View')
      return ( <Text navigator={navigator} title="test">Testing Testing TestingTestingTesting</Text> );
      //   <View navigator={navigator} title={route.title}>
      //     <Text>FriendList</Text>
      //     <FriendList friendList={ this.state.friendList }/> 
      //   </View> 
      // )
    } else {
      return (
        <View navigator={navigator} title={route.title}>
          //<FriendList friendList={ this.state.friendList } /> 
          <Text>Frien View</Text>
        </View> 
      )
    }
  }

  render() {
    const routes = [
      { title: 'Main View', index: 0},
      { title: 'Friend View', index: 1 } 
    ]
    return (
      <Navigator
        style={{padding: 100}}
        initialRoute={ routes[0] }
        renderScene={ this.navigatorRenderScene }/>
    )
  }
}

