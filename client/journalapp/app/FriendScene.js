import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  AsyncStorage,
  Navigator,
  ListView
} from 'react-native';

import EntryList from './EntryList';

export default class FriendScene extends Component {
  constructor(props) {
    super(props);
    this.props = props;

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      entries: ds.cloneWithRows([])
    }
  };

  componentWillMount(){
    //this.getFriendPosts();
    this.getFriendPosts()
  }

  getFriendPosts(){
    console.log('FriendScene props.friendId', this.props.friendId);
    var context = this;
    AsyncStorage.getItem('@MySuperStore:token', (err, token) => {
      fetch('http://localhost:3000/api/entries', {
        method: 'GET',
        query: {
          userId: context.props.friendId
        },
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': token
        }
      })    
      .then( resp => { resp.json()
        .then( json => {
          console.log('Fetched friends posts', json);
          const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
          this.setState({
            entries: ds.cloneWithRows(json)
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
        <EntryList entries={this.state.entries} />
        <Text onPress={ () => { this.props.navigator.pop() } }>Go Back</Text>
      </View>
    )
  }
}