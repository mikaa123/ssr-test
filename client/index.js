import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Search from '../common/components/Search'
import counterApp from './../common/reducers'

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__

// Create Redux store with initial state
const store = createStore(counterApp, preloadedState)

render(
  <Provider store={store}>
    <Search/>
  </Provider>,
  document.getElementById('root')
)
