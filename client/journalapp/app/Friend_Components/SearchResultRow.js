import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  ListView,
  View,
  TouchableHighlight,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/SearchResultRowStyles';

export default class SearchResultRow extends Component { 

  constructor(props){
    super(props);
    this.props = props;
    this.state = {
      dynamicFriendIcon: () => { return 'person-add'}, 
      dynamicIconStyle: () => { return styles.defaultIcon }
    }
  }

  updateIcon(){
    this.setState({
      dynamicFriendIcon: () => { return 'check-circle'}, 
      dynamicIconStyle: () => { return styles.greenIcon }
    })
  }

  sendReq() {
    this.updateIcon();
    this.props.sendreq(this.props.id, this.props.navigator)
  }

  render() {
    return (
      <TouchableHighlight onPress={ this.sendReq.bind(this) }>
        <View style={styles.container}>
         <View style={ styles.row }>
           <View style={ styles.names }>
              <Text style={styles.bodyText}>
                 { this.props.fullname }
              </Text>
              <Text style={styles.subbodyText}>
                { this.props.username }
              </Text>
           </View>
          <Icon style={ this.state.dynamicIconStyle() } name={ this.state.dynamicFriendIcon() }/>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
};

module.exports = SearchResultRow;

