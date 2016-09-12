// app/index.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  ListView,
  View,
  AsyncStorage,
  Dimensions,
  TouchableHighlight
} from 'react-native';

import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 56,
    paddingRight: 12,
    paddingLeft: 12,
    backgroundColor: '#f5f6f6',
    width: Dimensions.get('window').width,
  },
  subHeader: {
    fontSize: 12,
    fontWeight: '700',
    color:"#424242",
    marginLeft:12,
    marginBottom:12,
    marginTop:18
  },
  bodyText: {
    flexDirection: 'column',
    position:'relative',
    fontSize: 14,
    fontWeight: '400',
    color:"#666666",
    alignSelf:'center'
  },
  row: {
    flexDirection: 'row',
    paddingTop:12,
    paddingBottom:12,
    marginLeft:12,
    marginRight:12,
    borderBottomWidth: 0.5,
    borderColor: '#cccccc',
    justifyContent:'space-between'
  },
  arrow: {
    alignSelf:'flex-end',
    flexDirection: 'column',
    fontSize:24,
    color:"#c7c7cc",
  },
  rowContainer: {
    backgroundColor: '#fafafa',
    flex: 1,
    flexDirection: 'column',
  },
});

export default class SettingsTab extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      username: ''
    }
    AsyncStorage.getItem('@MySuperStore:username', (err, username) => {
      this.setState({
        username: username
      });
    });
  };

  render() {

   return (
      <View style={ styles.container }>
        <Text style={ styles.subHeader }>Profile information</Text>
        <TouchableHighlight>
          <View style={ styles.rowContainer }>
            <View style={ styles.row }>
              <Text style={ styles.bodyText }>Username: { this.state.username }</Text>
              <Icon style= {styles.arrow} name="navigate-next" ></Icon>
            </View>
          </View>
        </TouchableHighlight>
        <Button onPress= { () => this.props.signOut() } style={ {padding: 20} }>Sign Out</Button>
      </View>
   )
 }
}

