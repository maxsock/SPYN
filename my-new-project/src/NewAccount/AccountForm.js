import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StatusBar,
  DatePickerIOS
} from 'react-native';
import { CheckBox } from 'react-native-elements'


export default class AccountForm extends Component {

  render() {
    return (
      <View style={styles.container}>
      <StatusBar
      barStyle = "light-content"
      />
      <TextInput
      placeholder = "First Name"
      returnKeyType = "next"
       style={styles.input}
       />
       <TextInput
       placeholder = "Last Name"
       returnKeyType = "next"
        style={styles.input}
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
        <View style = {styles.checkboxContainer}>
        <CheckBox
          containerStyle = {{width : 140}}
          center
          title='DJ'
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
        />
        <CheckBox
          containerStyle = {{width : 140}}
          center
          title='Spyner'
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
        />
        </View>


        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={()=> this.props.navigation.navigate('CreateScreen')}>
        <Text style={styles.buttonText}> Already a member ? </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
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
    marginTop : 40,
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
  },
  checkboxContainer : {
    flexDirection : 'row',
    justifyContent: 'space-between',
  },
})
