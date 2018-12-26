import React from 'react';
import { Consumer } from './Context';
import Player from './player';

const PlayerList = () => {
  return ( 
    <Consumer>
      { ({ players, actions }) => {
        return (
          <React.Fragment>
            {players.map((player, index) => 
              <Player 
                key={player.id.toString()}
                {...player}
                index={index}
                isHighScore={actions.highScore === player.score}
              />
            )}   
          </React.Fragment>
        );
      }}
    </Consumer>
   );
}
 
export default PlayerList;