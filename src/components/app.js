import React, { Component } from 'react';
require('../../assets/css/style.scss');

export default class App extends Component {
  render() {
    return (
        <div>{this.props.children}</div>
    );
  }
}
