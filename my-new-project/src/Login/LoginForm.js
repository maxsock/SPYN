import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StatusBar,
  Button
} from 'react-native';


export default class LoginForm extends Component {

  render() {
    return (
      <View style={styles.container}>
      <StatusBar
      barStyle = "light-content"
      />
      <TextInput
      placeholder = "username"
      returnKeyType = "next"
      autoCapitalize = "none"
      autoCorrect = {false}
      onSubmitEditing = {() => this.passwordInput.focus()}
       style={styles.input}
       />
       <TextInput
       placeholder = "password"
       returnKeyType = "done"
       secureTextEntry
       ref = {(input) => this.passwordInput = input}
        style={styles.input}
        />

        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={()=> this.props.navigation.navigate('SongScreen')}>
        <Text style={styles.buttonText}> LOGIN </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=> this.props.navigation.navigate('CreateScreen')}>
        <Text style={styles.buttonText}> CREATE ACCOUNT</Text>
        </TouchableOpacity>
        </View>
      </View>


    );
  }
}
const styles = StyleSheet.create({
  container : {
    padding : 20
  },
  input : {
    height : 40,
    backgroundColor : '#FFF',
    marginBottom : 20,
    paddingHorizontal : 10

  },
  buttonContainer : {
    flexDirection : 'row',
    justifyContent: 'space-between',
  },
  button : {
    backgroundColor : '#b33939',
    paddingVertical : 15,
    width : 160
  },
  buttonText : {
    textAlign : 'center',
    fontWeight : '700',
    color : '#FFF'
  }
})
