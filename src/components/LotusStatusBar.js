/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar
} from 'react-native';

const LutosStatusBar = ({}) => (
  <View style={styles.container}>
      {Platform.OS === 'ios' && (<StatusBar barStyle="light-content" />) }
      {Platform.OS === 'android' && (<StatusBar barStyle="light-content"
                                                translucent={true}
                                                backgroundColor={'transparent'}/>)}
  </View>
);

export default LutosStatusBar;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
