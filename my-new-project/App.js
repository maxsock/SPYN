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



export default class App extends Component {
  componentWillMount(){
    const firebaseConfig = {
      apiKey: "AIzaSyDsayAiukW8so98Sxz1nwFbP3o5K-vBX3s",
        authDomain: "spyn-cdccc.firebaseapp.com",
        databaseURL: "https://spyn-cdccc.firebaseio.com",
        projectId: "spyn-cdccc",
        storageBucket: "spyn-cdccc.appspot.com",
        messagingSenderId: "734474992277"
    };
    const firebaseApp = firebase.initializeApp(firebaseConfig);

  }

  constructor(){
    super();
      let data1;
    this.state ={
      songs: [],
      currentSong: []
    }
}

getSongs(){
   firebase.database().ref().on('value', snapshot=>{
     this.setState({songs: snapshot.val()});
  })
  firebase.database().ref().on('child_changed',  snapshot=> {
    const items = this.state.songs;
    items[snapshot.key] = snapshot.val();

    this.setState({songs: []});
    console.log(this.state.songs);

    // re-render
    this.forceUpdate();

  });

}



componentDidMount(){
  this.getSongs();
}



  render() {
    return(
   <AppNavigator screenProps={this.state.songs}/>
 );


  }
}
const AppNavigator = StackNavigator({
  LoginScreen : { screen : Login},
  SongScreen : { screen : Songs},
  CreateScreen : { screen : NewAccount},}, {
    navigationOptions: {
      header: null
    }
  }
);

const styles = StyleSheet.create({
  container: {
    backgroundColor : '#2c3e50',
    color : '#FFF'
  },

})


// skip this line if using Create React Native App
//AppRegistry.registerComponent('AwesomeProject', () => LotsOfGreetings);

AppRegistry.registerComponent('MovieTickets', () => App);
