import React from 'react';

const Counter = props => {

    const { index, changeScore } = props;

    return (
      <div className='counter'>
        <button className='counter-action decrement' onClick={() => changeScore(index, -1)}> - </button>
        <span className="counter-score">{props.score}</span>
        <button className='counter-action increment' onClick={() => changeScore(index, 1)}> + </button>
      </div>
    );
}

export default Counter;