import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  AsyncStorage,
  Navigator
} from 'react-native';

import EntryList from './EntryList';

export default class FriendScene extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      entries: [{text: 'sample entry'}]
    }
  };

  componentWillMount(){
    //this.getFriendPosts();
  }

  getFriendPosts(){
    AsyncStorage.getItem('@MySuperStore:token', (err, token) => {
      fetch('http://localhost:3000/api/entries', {
        method: 'GET',
        params: {
          userId: 42
        },
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': token
        }
      })    
      .then( resp => { resp.json()
        .then( json => {
          this.setState({
            entries: json
          })
        })
        .catch((error) => {
          console.warn("fetch error on getrequest:", error)
        });
      });
    });
  }

        // <EntryList entries={this.state.entries} />
  render() {
    return (
      <View>
        <Text>FriendPage</Text>
        <Text>Friends EntryList</Text>
        <Text onPress={ () => { this.props.navigator.pop() } }>Go Back</Text>
      </View>
    )
  }
}