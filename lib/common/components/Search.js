'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dom = require('react-instantsearch/dom');

var _connectors = require('react-instantsearch/connectors');

var _server = require('react-dom/server');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Product(_ref) {
  var hit = _ref.hit;

  return _react2.default.createElement(
    'div',
    null,
    hit.name
  );
};

// I'm passing an initialResultState:
// - Displayed if searchResults is undefined only

var Search = function Search(_ref2) {
  var resultsState = _ref2.resultsState;

  console.log('updated234');
  return _react2.default.createElement(
    _dom.InstantSearch,
    {
      appId: 'latency',
      apiKey: '3d9875e51fbd20c7754e65422f7ce5e1',
      indexName: 'bestbuy',
      resultsState: resultsState
    },
    _react2.default.createElement(_dom.SearchBox, null),
    _react2.default.createElement(_dom.Hits, { hitComponent: Product })
  );
};

exports.default = Search;
//# sourceMappingURL=Search.js.map