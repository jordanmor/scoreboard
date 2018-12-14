import React from 'react';

import Counter from './counter';

const Player = props => {

  const { name, id, score } = props.player;

  return (
    <div className='player'>
      <span className="player-name">
        <button className="remove-player" onClick={ () => props.removePlayer(id)}
        >✖</button>
        {name}
      </span>
      <Counter 
        score={score}
        index={props.index}
        changeScore={props.changeScore}
      />
    </div>
  );
}

export default Player;