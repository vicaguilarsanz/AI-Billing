import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Confirm extends Component {

  state = {
    ticket: "",
    tienda: "",
    fecha: ""
  }

  componentWillMount(){
    var texto = this.props.text;
    texto = texto.replace(/\n/g, " ");
    var res = texto.split(" ");
    
    var a = res.indexOf("Ticket");
    console.log(res[a + 2]);
    this.setState({ ticket: res[a + 2] });
    console.log(this.state.ticket);

    var a = res.indexOf("Tienda");
    console.log(res[a + 2]);
    this.setState({ tienda: res[a + 2] });
    console.log(this.state.tienda);

    var a = res.indexOf("Fecha");
    console.log(res[a + 2]);
    this.setState({ fecha: res[a + 2] });
    console.log(this.state.fecha);

  }

  render() {
    return (
      <View>
        <Text>
          {this.state.ticket}
        </Text>
        <Text>
          {this.state.tienda}
        </Text>
        <Text>
          {this.state.fecha}
        </Text>
      </View>
    );
  }
};
