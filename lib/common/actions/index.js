'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var SET_COUNTER = exports.SET_COUNTER = 'SET_COUNTER';
var INCREMENT_COUNTER = exports.INCREMENT_COUNTER = 'INCREMENT_COUNTER';
var DECREMENT_COUNTER = exports.DECREMENT_COUNTER = 'DECREMENT_COUNTER';

var set = exports.set = function set(value) {
  return {
    type: SET_COUNTER,
    payload: value
  };
};

var increment = exports.increment = function increment() {
  return {
    type: INCREMENT_COUNTER
  };
};

var decrement = exports.decrement = function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
};

var incrementIfOdd = exports.incrementIfOdd = function incrementIfOdd() {
  return function (dispatch, getState) {
    var _getState = getState(),
        counter = _getState.counter;

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
};

var incrementAsync = exports.incrementAsync = function incrementAsync() {
  var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
  return function (dispatch) {
    setTimeout(function () {
      dispatch(increment());
    }, delay);
  };
};
//# sourceMappingURL=index.js.map