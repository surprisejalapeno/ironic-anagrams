
// app/index.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  ListView,
  View,
  AsyncStorage
} from 'react-native';

// Refactored to use import instead of ES2015 require, for consistency
import EntryList from './EntryList';

export default class EntriesTab extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      text: 'What did you do today?',
      entries: ds.cloneWithRows([])
    };
  }

    componentDidMount() {
      this.getEntries();
    }

    getEntries(){

      AsyncStorage.getItem('@MySuperStore:token', (err, token) => {

        fetch('http://localhost:3000/api/entries', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': token
          }
        })
        .then( resp => { resp.json()
          .then( json => {
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

    handleMessageSubmit() {

      AsyncStorage.getItem('@MySuperStore:token', (err, token) => {
        var message = {text:this.state.text};

        fetch('http://localhost:3000/api/entries', {
          method: 'POST',
          headers: {
             //'Accept': 'application/json',
           'Content-Type': 'application/json',
           'x-access-token': token
          },
          body: JSON.stringify(message)
        })
          .then((response) => {
            console.log(response)
            this.getEntries();
          })
            .catch((error) => {
              console.warn("fetch error:", error)
            });
      });

    }


  render() {
   const { page } = this.state;

     return (
        <View>
         <TextInput
             style={styles.textinput}
             value={this.state.text}
             onChangeText={(text) => this.setState({text})}
             onSubmitEditing= {this.handleMessageSubmit.bind(this)} />
          <EntryList entries = {this.state.entries} />
        </View>

     )
   }
  }

const styles = StyleSheet.create({
  textinput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1

  }
});
