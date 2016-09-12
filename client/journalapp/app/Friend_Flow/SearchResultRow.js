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

import Icon from 'react-native-vector-icons/MaterialIcons'

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

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    flex: 1,
    flexDirection: 'column',
  },
  bodyText: {
    flexDirection: 'row',
    position:'relative',
    fontSize: 14,
    fontWeight: '400',
    color:"#666666",
    alignSelf:'flex-start'
  },
  subbodyText: {
    flexDirection: 'row',
    position:'relative',
    fontSize: 11,
    fontWeight: '300',
    color:"#999999",
    alignSelf:'flex-start'
  },
  names:{
    flexDirection:'column'
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
  defaultIcon: {
    fontSize: 24,
    color:"#c7c7cc"
  }, 
  greenIcon: {
    fontSize: 24,
    color:"#0ed978"
  }
});
