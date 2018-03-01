import React, { Component } from 'react';
import { Button, Header,  List, ListItem , SideMenu} from 'react-native-elements'
import {
  ScrollView,
  Text,
  View
} from 'react-native';


export default class SongItems extends Component {
  constructor(props){
   super(props);
     this.onPress = this.onPress.bind(this);
       this.state = {
         upvote : this.props.song.upvote
       }
    }
  onPress(upvote){

    this.setState((preState) => {
      return {
        upvote: preState.upvote + 1
        };
     });
     this.props.song.upvote= this.state.upvote;

  }
  
  render() {
    //console.log(this.props);

    return (
      <View>
        <ScrollView>
        <ListItem
          Avatar
          avatar={{uri:this.props.song.avatar_url}}
          title={this.props.song.title}
          subtitle={this.state.upvote}
          rightIcon={{name: 'like',  type:'evilicon', raised:true, color:'white'}}
          onPressRightIcon={() => this.onPress(this.props.song.upvote)}
          containerStyle={{backgroundColor:'#2c3e50'}}
          titleStyle={{color : '#FFF'}}
          />

        </ScrollView>
      </View>
    );
  }
}
