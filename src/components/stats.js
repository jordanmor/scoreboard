import React from 'react';
import { Consumer } from './Context';

const Stats = () => {

  return (
    <Consumer>
      { ({ players }) => {

        const totalPlayers = players.length;
        const totalPoints = players.reduce((total, p) => total + p.score, 0);

        return (
          <table className="stats">
            <tbody>
              <tr>
                <td>Players:</td>
                <td>{totalPlayers}</td>
              </tr>
              <tr>
                <td>Total Points:</td>
                <td>{totalPoints}</td>
              </tr>
            </tbody>
          </table>
        );
      }}
    </Consumer>
   );
}

export default Stats;