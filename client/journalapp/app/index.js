import React, { Component } from 'react';

import AuthParent from './AuthParent';
import Main from './Main';

export default class Journalapp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }

  updateStatus(status) {
    this.setState({
      loggedIn: status
    })
  }

  render() {

    return this.state.loggedIn ? (<Main />) : (<AuthParent updateStatus={this.updateStatus.bind(this)}/>)

  }
}
