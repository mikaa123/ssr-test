'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _server = require('react-dom/server');

var _reducers = require('./../common/reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _Search = require('./../common/components/Search');

var _Search2 = _interopRequireDefault(_Search);

var _algoliasearch = require('algoliasearch');

var _algoliasearch2 = _interopRequireDefault(_algoliasearch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = 3000;

var client = (0, _algoliasearch2.default)('latency', '3d9875e51fbd20c7754e65422f7ce5e1');
var index = client.initIndex('bestbuy');

app.use('/public', _express2.default.static('public'));

// This is fired every time the server side receives a request
app.use(handleRender);

// We are going to fill these out in the sections to follow
function renderFullPage(html, preloadedState) {/* ... */}

function handleRender(req, res) {
  var preloadedState = { counter: 10 };
  var store = (0, _redux.createStore)(_reducers2.default, preloadedState);

  index.search('').then(function (state) {
    console.log('in search', state);
    // Render the component to a string
    var html = (0, _server.renderToStaticMarkup)(_react2.default.createElement(
      _reactRedux.Provider,
      { store: store },
      _react2.default.createElement(_Search2.default, { resultsState: state })
    ));

    // Grab the initial state from our Redux store
    var finalState = store.getState();
    console.log('state:', finalState);

    // Send the rendered page back to the client
    res.send(renderFullPage(html, finalState));
  });
}

function renderFullPage(html, preloadedState) {
  return '\n    <!doctype html>\n    <html>\n      <head>\n        <title>Redux Universal Example</title>\n      </head>\n      <body>\n        <div id="root">' + html + '</div>\n        <script>\n          // WARNING: See the following for Security isues with this approach:\n          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations\n        </script>\n        <script src="/public/vendor.bundle.js"></script>\n        <script src="/public/bundle.js"></script>\n      </body>\n    </html>\n    ';
}

app.listen(port);
//# sourceMappingURL=index.js.map