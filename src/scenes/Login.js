/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,

} from 'react-native';
import { connect } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient'
import LotusStatusBar from '../components/LotusStatusBar'
import SvgUri from 'react-native-svg-uri'
var DismissKeyboard = require('dismissKeyboard');
import LinearGradientButton from '../components/LinearGradientButton'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      start: {x: 0.5, y: 0.0},
      end: {x: 0.0, y: 0.75},
      locations: [0, 1.12],
      username: '',
      password: ''
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => {DismissKeyboard()}}>
      <LinearGradient colors={['#00E9FE', '#C44AD5',]}
                      start={this.state.start}
                      end={this.state.end}
                      locations={this.state.locations}
                      style={styles.linearGradient}
                      >
          <LotusStatusBar />
          <View style={styles.container}>
            <View style={styles.logo}>
              <SvgUri width="150" height="150" fill="white" source={require('../statics/images/logo.svg')}/>
            </View>
            <View style={styles.username}>
              <TextInput
                 style={{height: 48, backgroundColor: 'white', borderRadius: 25, paddingLeft: 20, paddingTop: 5, paddingBottom: 5}}
                 onChangeText={(text) => this.setState({username: text})}
                 value={this.state.username}
                 underlineColorAndroid="transparent"
                 placeholder="请输入用户名"
                 placeholderTextColor="#ACC9D3"

              />
            </View>
            <View style={styles.password}>
              <TextInput
                style={{height: 48, backgroundColor: 'white', borderRadius: 25, paddingLeft: 20, paddingTop: 5, paddingBottom: 5}}
                secureTextEntry={true}
                onChangeText={(text) => this.setState({password: text})}
                value={this.state.password}
                underlineColorAndroid="transparent"
                placeholder="请输入密码"
                placeholderTextColor="#ACC9D3"
              />
            </View>
            <View style={styles.loginButton}>
              <LinearGradientButton text="登录"
                              opacity={0.75}
                              style={{height: 48, borderRadius: 48}}
                              gradientColor={['#3023AE', '#C86DD7']}
                              onPress={() => {}}/>
            </View>
            <View style={styles.someText}>
              <View style={{width: 50, borderTopColor: '#c9b8ef', borderTopWidth: 1, marginTop: 6}}></View>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{backgroundColor: 'transparent', color: '#c9b8ef'}}>其他账号</Text>
              </View>
              <View style={{width: 50, borderTopColor: '#c9b8ef', borderTopWidth: 1, marginTop: 6 }}></View>
            </View>
            <View style={styles.thirdSigninBox}>
              <View style={styles.icon}></View>
              <View style={styles.icon}></View>
              <View style={styles.icon}></View>
              <View style={styles.icon}></View>
            </View>
          </View>
      </LinearGradient>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    height: "100%"
  },
  container: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: 'center',
    // borderWidth: 1,
    // borderColor: 'red'
  },
  loginButton: {
    width: "85%"
  },
  logo: {
    marginTop: 70
  },
  username: {
    width: "85%",
    marginTop: 60
  },
  password: {
    width: '85%',
    marginTop: 20,
    marginBottom: 40,
  },
  someText: {
    marginTop: 70,
    width: 160,
    flexDirection: 'row'
  },
  thirdSigninBox: {},
  icon: {}
});

export default connect(
   (state) => ({
   }),
   (dispatch) => ({
   })
)(Login);
