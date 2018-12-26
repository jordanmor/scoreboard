import React from 'react';
import { Consumer } from './Context';
import Player from './player';

const PlayerList = props => {
  return ( 
    <Consumer>
      { context => {
        return (
          <React.Fragment>
            {context.map((player, index) => 
              <Player 
                key={player.id.toString()}
                {...player}
                index={index}
                removePlayer={props.removePlayer}
                changeScore={props.changeScore}
                isHighScore={props.highScore === player.score}
              />
            )}   
          </React.Fragment>
        );
      }}
    </Consumer>
   );
}
 
export default PlayerList;