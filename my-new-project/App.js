import React, { Component } from 'react';
import { AppRegistry, NavigatorIOS, StyleSheet, Text, ScrollView, View } from 'react-native';
import { Button, Header,  List, ListItem , SideMenu, Icon} from 'react-native-elements'
import {StackNavigator} from 'react-navigation'
import { musics } from './src/data';
import Songs from './src/SongList/Songs';
import Login from './src/Login/Login';
import NewAccount from './src/NewAccount/NewAccount';
import * as firebase from 'firebase';
//https://api.myjson.com/bins/dal2f
//<NewAccount />


const firebaseConfig = {
  apiKey: "AIzaSyDsayAiukW8so98Sxz1nwFbP3o5K-vBX3s",
    authDomain: "spyn-cdccc.firebaseapp.com",
    databaseURL: "https://spyn-cdccc.firebaseio.com",
    projectId: "spyn-cdccc",
    storageBucket: "spyn-cdccc.appspot.com",
    messagingSenderId: "734474992277"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class App extends Component {
  constructor(){
    super();
    this.state ={
      songs: [],
      currentSong: []
    }
}
getSongs(){

 fetch('https://api.myjson.com/bins/1he36z')
    .then((response) => response.json())
    .then((response) => this.setState({songs:response}))
}

componentDidMount(){
  this.getSongs();

}
  break;
  render() {
    return (
      <AppNavigator screenProps={this.state.songs}/>


    );
  }
}
const AppNavigator = StackNavigator({
  LoginScreen : { screen : Login},
  SongScreen : { screen : Songs},
  CreateScreen : { screen : NewAccount}
})

const styles = StyleSheet.create({
  container: {
    backgroundColor : '#2c3e50',
    color : '#FFF'
  },

})


// skip this line if using Create React Native App
//AppRegistry.registerComponent('AwesomeProject', () => LotsOfGreetings);

AppRegistry.registerComponent('MovieTickets', () => App);
