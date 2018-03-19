import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Constants } from 'expo';
import { Button, SearchBar, Card, Tile, Header, PricingCard, Divider, Text } from 'react-native-elements'; // 0.19.0
import { Actions } from 'react-native-router-flux';
import "@expo/vector-icons"; // 6.2.2

export default class Menu extends Component {
  state = {
    imageUri: null,
    label: null,
  }

  render() {
    return (

      <View style={styles.container2}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'AI BILLING', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
          outerContainerStyles={{ backgroundColor: '#00b894' }}
        />

        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false} >
            <Card style={styles.carta}
              backgroundColor='#00b894'
              image={{ uri: 'http://xabes.com/wp-content/uploads/2016/07/starbucks-banner.jpg' }}>
              <Button
                icon={{ name: 'visibility' }}
                backgroundColor='#00b894'
                onPress={this._pickImage}
                fontWeight='900'
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                title='CREAR FACTURA' />
            </Card>

            <Card style={styles.carta}
              backgroundColor='#fbc531'
              image={{ uri: 'http://www.29febrero.com/wp-content/uploads/2016/06/best-buy.jpg' }}>

              <Button
                icon={{ name: 'visibility' }}
                backgroundColor='#fbc531'
                
                fontWeight='900'
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                title='CREAR FACTURA' />
            </Card>

            <Card style={styles.carta}
              backgroundColor='#e84118'
              image={{ uri: 'http://zonacero.com.mx/img/vips/branding/brandingGacetaVips01.jpg' }}>

              <Button
                icon={{ name: 'visibility' }}
                backgroundColor='#e84118'
              
                fontWeight='900'
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                title='CREAR FACTURA' />
            </Card>

            <Card style={styles.carta}
              backgroundColor='#03A9F4'
              image={{ uri: 'http://www.elpoderdelasideas.com/wp-content/uploads/dominos_pizza_logo.png' }}>

              <Button
                icon={{ name: 'visibility' }}
                backgroundColor='#03A9F4'
               
                fontWeight='900'
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                title='CREAR FACTURA' />
            </Card>

          </ScrollView >
        </View>
      </View>

    );
  }

  _pickImage = async () => {
    const {
      cancelled,
      uri,
      base64,
    } = await Expo.ImagePicker.launchCameraAsync({
        base64: true,
      });
    if (!cancelled) {
      this.setState({
        imageUri: uri,
        label: '(loading...)',
      });
    }

    const body = {
      requests: [
        {
          image: {
            content: base64,
          },
          features: [
            {
              type: 'DOCUMENT_TEXT_DETECTION'
            }
          ]
        },
      ],
    };

    const key = '';
    const response = await fetch(`https://vision.googleapis.com/v1/images:annotate?key=${key}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const parsed = await response.json();
    // console.log(parsed);
    this.setState({
      label: parsed.responses[0].textAnnotations[0].description,
    });
    console.log(this.state.label);
    Actions.confirm({ text: this.state.label });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },

  container2: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#00b894',
  },
  tiltle: {
    alignItems: "center"
  }

});