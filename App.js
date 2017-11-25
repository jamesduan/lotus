import React, { Component } from 'react'
import { Provider } from 'react-redux'
import ConfigureStore from './src/store/ConfigureStore'

import Login from './src/scenes/Login'

const store = ConfigureStore()

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Login />
      </Provider>
    )
  }}
