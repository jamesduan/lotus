/* @flow */

import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import { createAnimatableComponent, View, Text } from 'react-native-animatable';

import { connect } from 'react-redux'

class Home extends Component {
  render() {
    return (
      <View animation="fadeIn" duration={2100} style={styles.container} useNativeDriver>
        <View style={{justifyContent: 'center', alignItems: 'center', width: '80%', height: '50%', backgroundColor: 'blueviolet'}}>
        <Text>I'm the Home component</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;