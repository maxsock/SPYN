import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  StatusBar,
  Button
} from 'react-native';
import * as firebase from 'firebase';

export default class LoginForm extends Component {
  state = { email: '', password: '', error: false, loading: false };

    onLoginPress() {
        this.setState({ error: false, loading: true });

        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => { this.setState({ error: false, loading: false });
          this.props.navigation.navigate('SongScreen')})
            .catch(() => {
                        console.log('not successful');
                        this.setState({ error: true, loading: false })

            });
    }

FailedAuthentication(){
  if(this.state.error){
    return (<Text style={styles.failedAuthentication}> Wrong username or password </Text>)
  }
}

Spinner(){
  if (this.state.loading) {
           return  <ActivityIndicator style={styles.spinner} size="large" color="#b33939" />;
       }
}

  render() {
    return (
      <View style={styles.container}>
      <StatusBar
      barStyle = "light-content"
      />
      {this.FailedAuthentication()}
      {this.Spinner()}
      <TextInput
      placeholder = "username"
      returnKeyType = "next"
      autoCapitalize = "none"
      autoCorrect = {false}
       onChangeText={email => this.setState({ email })}
      onSubmitEditing = {() => this.passwordInput.focus()}
       style={styles.input}
       />
       <TextInput
       placeholder = "password"
       returnKeyType = "done"
       secureTextEntry
       onChangeText={password => this.setState({ password })}
       ref = {(input) => this.passwordInput = input}
        style={styles.input}
        />

        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={()=> this.onLoginPress()}>
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
  spinner : {
    marginBottom : 30
  },
  failedAuthentication : {
    color : '#b33939',
    marginBottom : 20,
    textAlign : 'center'
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
