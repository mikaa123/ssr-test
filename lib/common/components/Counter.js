'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Counter = function Counter(_ref) {
  var increment = _ref.increment,
      incrementIfOdd = _ref.incrementIfOdd,
      incrementAsync = _ref.incrementAsync,
      decrement = _ref.decrement,
      counter = _ref.counter;

  console.log(increment);
  return _react2.default.createElement(
    'p',
    null,
    'Clicked1: ',
    counter,
    ' times',
    ' ',
    _react2.default.createElement(
      'button',
      { onClick: increment },
      '+'
    ),
    ' ',
    _react2.default.createElement(
      'button',
      { onClick: decrement },
      '-'
    ),
    ' ',
    _react2.default.createElement(
      'button',
      { onClick: incrementIfOdd },
      'Increment if odd'
    ),
    ' ',
    _react2.default.createElement(
      'button',
      { onClick: function onClick() {
          return incrementAsync();
        } },
      'Increment async'
    )
  );
};

Counter.propTypes = {
  increment: _react.PropTypes.func.isRequired,
  incrementIfOdd: _react.PropTypes.func.isRequired,
  incrementAsync: _react.PropTypes.func.isRequired,
  decrement: _react.PropTypes.func.isRequired,
  counter: _react.PropTypes.number.isRequired
};

exports.default = Counter;
//# sourceMappingURL=Counter.js.map