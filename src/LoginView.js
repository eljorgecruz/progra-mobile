import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Switch, TextInput, Alert, Image } from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchValue: false,
      emailValue: '',
      passwordValue: '',
      emailValidationMessage: '',
      passwordValidationMessage: '',
    };
  }

  validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    this.setState({
      emailValidationMessage: isValid ? '' 
      : 'Por favor ingresar un correo válido',
    });
  };

  validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isValid = passwordRegex.test(password);
    this.setState({
      passwordValidationMessage: isValid 
        ? ''
        : 'Por favor ingresar una contraseña válida (al menos 8 caracteres, mayúsculas, minúsculas y al menos 1 carácter especial)',
    });
  };

  onButtonPress = () => {
    const { emailValue, passwordValue } = this.state;
    // Realizar validaciones antes de mostrar el mensaje de alerta
    this.validateEmail(emailValue);
    this.validatePassword(passwordValue);

    // Verificar si ambos campos son válidos
    if (this.state.emailValidationMessage === '' && this.state.passwordValidationMessage === '') {
      Actions.home();
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/favicon.png')} style={styles.logo} />
        <Text>Email</Text>
        <Text style={styles.msg}>{this.state.emailValidationMessage}</Text>
        <TextInput
          placeholder="correo@dominio.com"
          style={styles.textInput}
          onChangeText={(text) => this.setState({ emailValue: text })}
          onEndEditing={() => this.validateEmail(this.state.emailValue)}
          value={this.state.emailValue}
        />
        <Text>Password</Text>
        <Text style={styles.msg}>{this.state.passwordValidationMessage}</Text>
        <TextInput
          placeholder="contraseña"
          style={styles.textInput2}
          onChangeText={(text) => this.setState({ passwordValue: text })}
          onEndEditing={() => this.validatePassword(this.state.passwordValue)}
          value={this.state.passwordValue}
          secureTextEntry={true}
        />
        <Button
          title="Login"
          color="gray"
          accessibilityLabel="Iniciar sesión"
          onPress={this.onButtonPress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    paddingStart: 30,
    width: '80%',
    height: 50,
    
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  textInput2: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    paddingStart: 30,
    width: '80%',
    height: 50,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  msg: {
    color: 'red',
  },
  logo: {
    width: 100,  // ajusta estos valores según tus necesidades
    height: 100, // ajusta estos valores según tus necesidades
    marginBottom: 20,
  },
});
