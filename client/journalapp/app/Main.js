import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  ListView,
  View,
  Navigator, 
  AsyncStorage
} from 'react-native';

import Tabs from 'react-native-tabs';
import EntriesTab from './EntriesTab';
import FriendsTab from './FriendsTab';
import SettingsTab from './SettingsTab';
import FriendScene from './FriendScene';
import MessageScene from './MessageScene';
import SearchFriends from './SearchFriends';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      page: 'EntriesTab',
      entries: ds.cloneWithRows([])
    };
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

  renderTab(navigator) {
    if (this.state.page === "EntriesTab") return <EntriesTab navigator={navigator} getEntries={ this.getEntries.bind(this) } entries={ this.state.entries }/>;
    if (this.state.page === "FriendsTab") return <FriendsTab navigator={navigator} />;
    if (this.state.page === "SettingsTab") return <SettingsTab signOut={ this.props.signOut }/>;
  }

  navigatorRenderScene(route, navigator) {
    const { page } = this.state;
    if (route.title === 'Main') {
      return (
        <View style={styles.container}>
          <Text>{page}</Text>

          {this.renderTab(navigator)}

          <Tabs
            selected={page}
            style={styles.tabbar}
            selectedStyle={{color:'red'}} onSelect={el=>this.setState({page:el.props.name})}>
              <Text name="EntriesTab">Entries</Text>
              <Text name="FriendsTab">Friends</Text>
              <Text name="SettingsTab">Settings</Text>
          </Tabs>
        </View>
      )
    } else if (route.title === 'FriendPage') {
      return (
        <FriendScene friendId={ route.friendId } navigator={navigator} />
      )
    } else if (route.title === 'MessageScene') {
      return (
        <MessageScene navigator={navigator} />
    } else if (route.title === 'SearchFriends') {
      return (
        <SearchFriends navigator={ navigator } />
      )
    }
  }

  render() {

    return (
      <Navigator
        initialRoute={ { title: 'Main' } }
        renderScene={ this.navigatorRenderScene.bind(this) }
        navigationBar = {
          <Navigator.NavigationBar
                 routeMapper={{
                   LeftButton(route, navigator, index, navState) {
                     // some component or null
                   },
                   RightButton: (route, navigator, index, navState) => {
                      if ( this.state.page === "FriendsTab"){
                        return (
                          <Text onPress={()=>{ navigator.push({title: 'SearchFriends'}) }} >
                          Add Friends
                          </Text>
                          )
                      }
                   },
                   Title: (route, navigator, index, navState) =>
                     { return (<Text>{this.state.page}</Text>); }
                 }}
                 style={{backgroundColor: 'gray'}}
               />
        }
      />
    )
  }
}

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