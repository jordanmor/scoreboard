import React from 'react';
import { Consumer } from './Context';
import Player from './player';

const PlayerList = () => {
  return ( 
    <Consumer>
      { context => {
        return (
          <React.Fragment>
            {context.players.map((player, index) => 
              <Player 
                key={player.id.toString()}
                {...player}
                index={index}
                isHighScore={context.actions.highScore === player.score}
              />
            )}   
          </React.Fragment>
        );
      }}
    </Consumer>
   );
}
 
export default PlayerList;