

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux'

class NetworkInfoBox extends Component {
  render() {
    // const {networkInfo} = this.props
    // console.log(this.props.networkStatuso);
    if (this.props.networkStatus) {
      return null
    } else {
      return (
        <View style={styles.container}>
            <Text style={styles.text}>网络链接失败，请检查您的网络设置</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(102, 102, 102, 0.8)'
  },
  text: {
    // backgroundColor: '#808080',
    margin: 10,
    color: 'white'
  }
});

export default connect((state) => ({
  networkStatus: state.networkStore.networkStatus
}), (dispatch) => ({}))(NetworkInfoBox)
