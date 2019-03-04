import React from 'react';
import VideoCamContainer from './VideoCamContainer';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class VideoCamIndex extends React.Component {
    render() {
      const { navigation } = this.props;
      return <VideoCamContainer navigation={navigation} />;
    }
  }
