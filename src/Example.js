import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Switch, TextInput, Alert } from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class LoginView extends Component {
  constructor(props){
    super(props);
    this.state = {
      switchValue: false,
      textValue: '',
    };
  }
  onChange = (value) => {
    console.warn(`El switch cambiara a: ${value}`)
    this.setState({switchValue: value})
  }
  onPressLearnMore(){
    console.warn('Presionaste el boton')
  }
  onButtonPress = () => {
    Alert.alert('Esto es lo que se escribio', this.state.textValue);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          onChangeText={(text) => this.setState({ textValue: text })}
          
          value={this.state.textValue}
          style={styles.textInput}
        />
        <Switch
          onValueChange = {() => this.onChange(!this.state.switchValue)}
          value = {this.state.switchValue}/>
        <Button
          onPress={this.onPressLearnMore}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={this.onButtonPress}
          title="Mostrar Alert"
          color="#841584"
          accessibilityLabel="Mostrar un Alert con el texto del TextInput"
        />
        <Text>Esto es la practica</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'red',
  },
});