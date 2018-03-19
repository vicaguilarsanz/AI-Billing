import React, { Component } from 'react';
import { Text } from 'react-native';

export default class Confirm extends Component {
  render() {
    return (
      <Text>
        {this.props.text}
      </Text>
    )
  }
};
