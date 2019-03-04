import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, PanResponder, Animated, TextInput, KeyboardAvoidingView, CameraRoll } from 'react-native';
import { Camera, Permissions } from 'expo';
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { Constants, takeSnapshotAsync } from 'expo';
import {styles} from './styles';
import VideoCam from './VideoCam';

export default class VideoCamContainer extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){}

  render(){
    return <VideoCam navigation={this.props.navigation}/>
  }
}
