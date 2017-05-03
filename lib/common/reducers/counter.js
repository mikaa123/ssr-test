'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require('./../actions');

var counter = function counter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var action = arguments[1];

  switch (action.type) {
    case _actions.SET_COUNTER:
      return action.payload;
    case _actions.INCREMENT_COUNTER:
      return state + 1;
    case _actions.DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
};

exports.default = counter;
//# sourceMappingURL=counter.js.map