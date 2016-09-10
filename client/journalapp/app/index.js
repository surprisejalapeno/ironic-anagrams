 import React, { Component } from 'react';
 
// // This is all that's needed to show a mini testing view that shows user's location, grabbed from the device.
//  import Geo from './testGeo';
//  import {
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';

// export default class testApp extends Component {
//   constructor(){
//     super();
//   }

//   render () {
//     return (

//       <View>
//         <Geo/>
//       </View>
//     );
//   }
// }


import {
    AsyncStorage
} from 'react-native';


import AuthParent from './AuthParent';
import Main from './Main';

export default class Journalapp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }

  componentWillMount(){
    AsyncStorage.getItem('@MySuperStore:token', (err, token) => {
      var message = {text:this.state.text};
      this.updateStatus(true);
    });
  }

  signOut(){
    AsyncStorage.removeItem('@MySuperStore:token', (err) => {
      if (err) {console.log('Error: ', err)}
      this.updateStatus(false);
    })
  }

  updateStatus(status) {
    this.setState({
      loggedIn: status
    })
  }

  render() {
    return this.state.loggedIn ? (<Main signOut={ this.signOut.bind(this) }/>) : (<AuthParent updateStatus={this.updateStatus.bind(this)}/>)
  }
}
