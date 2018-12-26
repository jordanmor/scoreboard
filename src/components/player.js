import React from 'react';
import PropTypes from 'prop-types';
import Counter from './counter';
import Icon from './icon';

const Player = props => {

  const { name, id, score } = props;

  return (
    <div className='player'>
      <span className="player-name">

        <button className="remove-player" onClick={ () => props.removePlayer(id)}
        >✖</button>

        <Icon isHighScore={props.isHighScore} />

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
  name: PropTypes.string,
  id: PropTypes.number,
  score: PropTypes.number,
  index: PropTypes.number,
  changeScore: PropTypes.func,
  removePlayer: PropTypes.func,
  isHighScore: PropTypes.bool
};

export default Player;