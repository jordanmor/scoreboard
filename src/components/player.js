import React from 'react';
import PropTypes from 'prop-types';
import Counter from './counter';
import Icon from './icon';

const Player = props => {

  const { name, id, score } = props.player;

  return (
    <div className='player'>
      <span className="player-name">

        <button className="remove-player" onClick={ () => props.removePlayer(id)}
        >✖</button>

        <Icon />

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

Player.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.String,
    id: PropTypes.number,
    score: PropTypes.number
  }).isRequired,
  index: PropTypes.number,
  changeScore: PropTypes.func,
  removePlayer: PropTypes.func
};

export default Player;