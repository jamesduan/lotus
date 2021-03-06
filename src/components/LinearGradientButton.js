
import React, { Component, PureComponent } from 'react'

import {
  StyleSheet,
  View,
  Text,
  Alert,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback
} from 'react-native'

import { PropTypes } from 'prop-types'

import LinearGradient from 'react-native-linear-gradient'

import { setSpText, scaleSize } from '../libs/screenUtils'

class LinearGradientButton extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      start: {x: 0.0, y: 1},
      end: {x: 1, y: 1.0},
      locations: [0, 1.0]
    };
  }

  renderBtnText () {
    return (<Text style={styles.buttonText}>{this.props.text}</Text>)
  }

  render() {
    return (
      <TouchableOpacity activeOpacity={this.props.opacity}
                        style={this.props.style}
                        onPress={this.props.onPress}>
        <LinearGradient colors={this.props.gradientColor}
                        start={this.state.start}
                        end={this.state.end}
                        locations={this.state.locations}
                        style={styles.linearGradient}
                        >
              {this.renderBtnText()}
        </LinearGradient>
      </TouchableOpacity>
    )
  }
}

LinearGradient.propTypes = {
  text: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
  opacity: PropTypes.number,
  gradientColor: PropTypes.array,
  onPress: PropTypes.func,
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: scaleSize(46),
    marginTop: 100,
  },
  linearGradient: {
    // flex: 1,
    borderRadius: scaleSize(48),
    height: scaleSize(90),
    // borderWidth: 1,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: setSpText(30),
    // fontFamily: 'Gill Sans',
    textAlign: 'center',
    // marginVertical: scaleSize(26),
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
})


export default LinearGradientButton
