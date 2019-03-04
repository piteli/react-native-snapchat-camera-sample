import React from 'react';
import Home from './Home';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class HomeContainer extends React.Component {

    
    render() {
      return <Home navigation={this.props.navigation} />;
    }
  }