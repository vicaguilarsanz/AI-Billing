import React from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView, ImageBackground } from 'react-native';

import LoginForm from './components/LoginForm';
import Router from './components/Router';

export default class App extends React.Component {
  render() {
    return (
      <Router />
    );
  }
}

