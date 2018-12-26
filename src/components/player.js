import React from 'react';
import { Consumer } from './Context';
import PropTypes from 'prop-types';
import Counter from './counter';
import Icon from './icon';

const Player = props => {

  const { 
    name, 
    id, 
    score, 
    index, 
    isHighScore 
  } = props;

  return (
    <div className='player'>

      <Consumer>
        { context => (
          <span className="player-name">

            <button className="remove-player" onClick={ () => context.actions.removePlayer(id)}
            >✖</button>

            <Icon isHighScore={isHighScore} />

            {name}

          </span>
        )}
      </Consumer>

      <Counter 
        score={score}
        index={index}
      />
    </div>
  );
}

Player.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  score: PropTypes.number,
  index: PropTypes.number,
  isHighScore: PropTypes.bool
};

export default Player;