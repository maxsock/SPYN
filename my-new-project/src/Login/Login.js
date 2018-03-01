import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Button
} from 'react-native';
import {
  RkButton,
  RkText,
  RkTextInput,
  RkAvoidKeyboard, RkStyleSheet
} from 'react-native-ui-kitten';

import LoginForm from './LoginForm';


export default class Login extends Component {


  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.logoContainer}>
      <Image
      style={styles.logo}
      source= {require('../images/logo.png')}/>
      </View>
      <View style={styles.formContainer}>
      <LoginForm navigation= {this.props.navigation}/>
      </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor : 'black'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100
  },
  buttonText: {
    color : '#2980b9',
    textAlign : 'center',
    fontWeight : '700'
  }
})
