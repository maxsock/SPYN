import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';

import AccountForm from './AccountForm';

export default class NewAccount extends Component {

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.logoContainer}>
      <Image
      style={styles.logo}
      source= {require('../images/logo.png')}/>
      </View>
      <View style={styles.formContainer}>
      <AccountForm/>
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
    marginTop: 40,
    alignItems: 'center',
    flexGrow: 1,
    //justifyContent: 'center'
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
