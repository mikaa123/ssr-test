import React, { PropTypes } from 'react'
import Search from './Search'

const Counter = ({increment, incrementIfOdd, incrementAsync, decrement, counter}) => {
  console.log(increment);
  return (
    <div>
      <p>
        Clicked1: {counter} times
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        {' '}
        <button onClick={incrementIfOdd}>Increment if odd</button>
        {' '}
        <button onClick={() => incrementAsync()}>Increment async</button>
      </p>
      <Search/>
    </div>
  )
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
}

export default Counter
