/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { connect } from 'react-redux'

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the Home component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default connect((state) => {}, (dispatch) => {})(Home)
