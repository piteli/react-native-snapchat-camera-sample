import React from 'react';
import HomeContainer from './HomeContainer';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class HomeIndex extends React.Component {

    render() {
      const { navigation } = this.props;
      return <HomeContainer navigation={navigation} />;
    }
  }