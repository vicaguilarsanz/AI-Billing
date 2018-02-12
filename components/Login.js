import React from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView, ImageBackground } from 'react-native';

import LoginForm from './LoginForm';


export default class App extends React.Component {
  render() {
    return (
      <ImageBackground source={require('../assets/bg.png')} style={styles.container}>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <View style={styles.logocontainer}>
            <Text style={styles.title}> AI Billing </Text>
            <Text style={styles.subtitle}>Automatic Fast Billing</Text>
          </View>
          <View style={styles.formContainer}>
            <LoginForm />
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logocontainer: {
    marginTop: 100,
    flexGrow: 1,
    justifyContent: 'center'
  },
  title: {
    color: '#222f3e',
    marginTop: 10,
    fontSize: 70,
    width: 300,
    textAlign: 'left',
    opacity: 0.9,
    fontWeight: 'bold',
    paddingHorizontal: 3
  },
  subtitle: {
    color: '#1dd1a1',
    textAlign: 'left',
    paddingHorizontal: 15
  }
});