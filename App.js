import React from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView, ImageBackground } from 'react-native';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import Router from './components/Router';

export default class App extends React.Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDpcBS3qQruhxurrNM3uJGNeOg5j1mghUw",
      authDomain: "ai-billing-vg.firebaseapp.com",
      databaseURL: "https://ai-billing-vg.firebaseio.com",
      projectId: "ai-billing-vg",
      storageBucket: "ai-billing-vg.appspot.com",
      messagingSenderId: "523439758450"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Router />
    );
  }
}

