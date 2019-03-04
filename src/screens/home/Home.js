import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {styles} from './styles';

export default class Home extends React.Component {
    
    render() {
      return (
          <View style={styles.container}>
            <Text>Here is the homepage</Text>
            <Button
                onPress={() => this.props.navigation.push('camera')}
                title="Go to Camera View"
                color="#27009e"
                accessibilityLabel="Go to Camera View"
                />
        </View>      
        );
    }
  }