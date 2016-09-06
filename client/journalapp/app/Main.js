import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  ListView,
  View
} from 'react-native';

import Tabs from 'react-native-tabs';
import EntriesTab from './EntriesTab';
import FriendsTab from './FriendsTab';
import SettingsTab from './SettingsTab';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'EntriesTab',
    };
  }

  renderTab() {
    if (this.state.page === "EntriesTab") return <EntriesTab />;
    if (this.state.page === "FriendsTab") return <FriendsTab/>;
    if (this.state.page === "SettingsTab") return <SettingsTab/>;
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
            <Text name="EntriesTab">Entries</Text>
            <Text name="FriendsTab">Friends</Text>
            <Text name="SettingsTab">Settings</Text>
        </Tabs>
      </View>
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