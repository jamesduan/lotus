/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Platform
} from 'react-native';
import { connect } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient'
import LotusStatusBar from '../components/LotusStatusBar'
import SvgUri from 'react-native-svg-uri'
var DismissKeyboard = require('dismissKeyboard');
import LinearGradientButton from '../components/LinearGradientButton'
import { scaleSize, setSpText , getTrueSize} from '../libs/screenUtils'

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
              <SvgUri width={scaleSize(250)} height={scaleSize(250)} fill="white" source={require('../statics/images/logo.svg')}/>
            </View>
            <View style={styles.username}>
              <TextInput
                 style={styles.textInput}
                 onChangeText={(text) => this.setState({username: text})}
                 value={this.state.username}
                 underlineColorAndroid="transparent"
                 placeholder="请输入用户名"
                 placeholderTextColor="#ACC9D3"

              />
            </View>
            <View style={styles.password}>
              <TextInput
                style={styles.textInput}
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
                              style={{height: scaleSize(90), width: '100%'}}
                              gradientColor={['#3023AE', '#C86DD7']}
                              onPress={() => {}}/>
            </View>
            <View style={styles.someText}>
              <View style={styles.line}></View>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{backgroundColor: 'transparent', color: '#c9b8ef'}}>其他账号</Text>
              </View>
              <View style={styles.line}></View>
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
    ...Platform.select({
      ios: {
        marginTop: scaleSize(40 - getTrueSize(5))
      },
      android: {
        marginTop: scaleSize(40 - getTrueSize(5))
      }
    }),
    // marginTop: scaleSize(40 - 5),
    alignItems: "center",
    justifyContent: 'center',
    borderWidth: 1,
    // borderColor: 'red'
  },
  loginButton: {
    width: "85%",
    height: scaleSize(100),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    marginTop: scaleSize(100)
  },
  textInput: {
    height: scaleSize(48 * 2 - 5),
    backgroundColor: 'white',
    borderRadius: scaleSize(80*2),
    paddingLeft: scaleSize(20* 2),
    paddingTop: scaleSize(5 * 2),
    paddingBottom: scaleSize(5 * 2),
    borderColor: '#D8E8F0',
    borderWidth: 1,
    fontSize: setSpText(36),
    color: "#19B3FF"
  },
  username: {
    width: "85%",
    marginTop: scaleSize(90)
  },
  password: {
    width: '85%',
    marginTop: scaleSize(40),
    marginBottom: scaleSize(80),
  },
  someText: {
    marginTop: scaleSize(90),
    width: scaleSize(300),
    flexDirection: 'row'
  },
  thirdSigninBox: {},
  icon: {},
  line: {
    width: scaleSize(70),
    borderTopColor: '#c9b8ef',
    borderTopWidth: 1,
    ...Platform.select({
      ios: {
        marginTop: scaleSize(12)
      },
      android: {
        marginTop: scaleSize(21)
      }
    })
  },
  thirdSigninBox: {
    marginTop: scaleSize(66),
    borderWidth: 1,
    width: "85%",
    height: scaleSize(180)
  }
});

export default connect(
   (state) => ({
   }),
   (dispatch) => ({
   })
)(Login);
