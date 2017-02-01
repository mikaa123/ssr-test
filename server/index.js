import path from 'path'
import express from 'express'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import counterApp from './../common/reducers'
import App from './../common/containers/App'

const app = express()
const port = 3000

app.use('/public', express.static('public'))

// This is fired every time the server side receives a request
app.use(handleRender)

// We are going to fill these out in the sections to follow
function renderFullPage(html, preloadedState) { /* ... */ }

function handleRender(req, res) {
  const preloadedState = { counter: 10 }
  const store = createStore(
    counterApp,
    preloadedState
  )

  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  )

  // Grab the initial state from our Redux store
  const finalState = store.getState()
  console.log('state:', finalState);

  // Send the rendered page back to the client
  res.send(renderFullPage(html, finalState))
}

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for Security isues with this approach:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
        </script>
        <script src="/public/vendor.bundle.js"></script>
        <script src="/public/bundle.js"></script>
      </body>
    </html>
    `
}

app.listen(port)
