import React from 'react';
import CameraContainer from './CameraContainer';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class CameraIndex extends React.Component {
    render() {
      const { navigation } = this.props;
      return <CameraContainer navigation={navigation} />;
    }
  }
