import React, { Component } from 'react';
import { Button, Header,  List, ListItem , SideMenu} from 'react-native-elements'
import {
  ScrollView,
  Text,
  View,
  StyleSheet
} from 'react-native';
import { movies } from '../data';
import SongItems from '../SongList/SongItems'
import SongPlaying from '../SongList/SongPlaying'

export default class Songs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: props.songs
    };

  }
  componentWillUpdate(){
    console.log('update');
  }
  render() {
    let songItems;
    if(this.props.screenProps){

      songItems = this.props.screenProps.filter((e) => e.isPlaying ===0).sort((a, b) => a.upvote < b.upvote).map(song => {
      return (
        <SongItems key={song.title} song={song} />
      );
      });
    }


    return (
      <View  style={styles.container}>
        <ScrollView >
         {songItems}
        </ScrollView>
        <SongPlaying currentSong={this.props.screenProps} style={styles.songContainer}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor : '#2c3e50'
  },
  songContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },

})
