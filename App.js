import React, { Component } from 'react'
import { Provider } from 'react-redux'
import ConfigureStore from './src/store/ConfigureStore'

import Router from './src/Router'

const store = ConfigureStore()

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }}
