import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import { List,ListItem} from 'react-native-elements'


export default class SongPlaying extends Component {

  render() {

    const list = this.props.currentSong.filter((e) => e.isPlaying ===1);

    if(this.props.currentSong){
        let currentSong;
    currentSong= this.props.currentSong.filter((e) => e.isPlaying ===1);

}

    return (

      <View style={styles.currentSongContainer}>
      <List>
      {
    list.map((item, i) => (
        <ListItem
          Avatar
          hideChevron
          avatar={{uri:item.avatar_url}}
          key={i}
          title={item.title}
          icon={{name: item.icon}}
          containerStyle = {{backgroundColor : '#bdc3c7'}}
        />
      ))
    }
      </List>
      </View>
    );
  }
}
const styles = StyleSheet.create({

})
