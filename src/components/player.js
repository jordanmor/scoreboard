import React from 'react';
import { Consumer } from './Context';
import PropTypes from 'prop-types';
import Counter from './counter';
import Icon from './icon';

const Player = props => {

  const { index, isHighScore } = props;

  return (
    <div className='player'>

      <Consumer>
        { ({ actions, players }) => (
          <span className="player-name">

            <button 
              className="remove-player" 
              onClick={ () => actions.removePlayer(players[index].id)}
            >
            ✖
            </button>

            <Icon isHighScore={isHighScore} />

            {players[index].name}

          </span>
        )}
      </Consumer>

      <Counter index={index} />
    </div>
  );
}

Player.propTypes = {
  index: PropTypes.number,
  isHighScore: PropTypes.bool
};

export default Player;