import React from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Email</Text>
        <TextInput
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address"
          style={styles.input}
        />

        <Text style={styles.title}>Password</Text>
        <TextInput
          returnKeyType="go"
          secureTextEntry
          style={styles.input}
          ref={(input) => this.passwordInput = input}
        />

        <TouchableOpacity 
          style={styles.buttonContainer}
          onPress={() => Actions.menu()}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.RContainer}><Text>Sign Up</Text></TouchableOpacity>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 80

  },
  input: {
    height: 40,
    backgroundColor: 'rgba(222,222,222,0.2)',
    marginBottom: 10,
    color: '#222f3e',
    paddingHorizontal: 10


  },
  title: {
    color: "#222f3e",
    paddingHorizontal: 3,
    paddingVertical: 5
  },
  buttonContainer: {
    backgroundColor: "#1dd1a1",
    paddingVertical: 15,

  },
  buttonText: {
    textAlign: 'center',
    color: "#FFF",
    fontWeight: '900'
  },
  RContainer: {
    paddingTop: 10,
    paddingVertical: 5,
    alignItems: 'center'

  }

});
