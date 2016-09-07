import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  ListView,
  View
} from 'react-native';

import Request from './Request';

var RequestList = (props) => {
  if (props.requestList.length > 0){

    return (

      <View>
      <Text>Pending Friend Requests</Text>
        { props.requestList.map( (request) => {
          return ( <Request username={ request.username } fullname={ friend.fullname } id={ friend.id } navigator={props.navigator}/> );
        }) }

      </View>

    )
  } else {
    return(
      <View></View>
      )
  }
};

module.exports = RequestList;