import React from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
export default class App extends React.Component {

  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false
    });
    Actions.menu();
  }

  onLoginFail() {
    this.setState({ error: 'Authentication Failed.', loading: false });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Email</Text>
        <TextInput
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address"
          style={styles.input}
          value={this.state.email}
          onChangeText={email => this.setState({ email })} 
        />

        <Text style={styles.title}>Password</Text>
        <TextInput
          returnKeyType="go"
          secureTextEntry
          style={styles.input}
          ref={(input) => this.passwordInput = input}
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />

        <TouchableOpacity 
          style={styles.buttonContainer}
          // onPress={() => Actions.menu()}
          onPress={this.onButtonPress.bind(this)}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.RContainer}><Text>Sign Up</Text></TouchableOpacity>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

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
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
});
