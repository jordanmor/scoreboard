import React from 'react';

import Counter from './counter';

const Player = props => {
  const { name, id } = props.player;
  return (
    <div className='player'>
      <span className="player-name">
        <button className="remove-player" onClick={ () => props.removePlayer(id)}
        >✖</button>
        {name}
      </span>
      <Counter />
    </div>
  );
}

export default Player;