import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  ListView,
  View,
  Navigator
} from 'react-native';

import Tabs from 'react-native-tabs';
import EntriesTab from './EntriesTab';
import FriendsTab from './FriendsTab';
import SettingsTab from './SettingsTab';
import FriendScene from './FriendScene';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      page: 'EntriesTab',
    };
  }

  renderTab(navigator) {
    if (this.state.page === "EntriesTab") return <EntriesTab />;
    if (this.state.page === "FriendsTab") return <FriendsTab navigator={navigator}/>;
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
                   RightButton(route, navigator, index, navState) {
                      // if ( this.state.page === "FriendsTab"){
                      //   return (<Text>Add Friends</Text>)
                      // }
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