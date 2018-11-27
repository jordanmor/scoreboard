import React, { Component } from 'react';
import Header from './components/header';
import Player from './components/player';

class App extends Component {

  state = {
    players: [
      {
        id: 1,
        name: "Guil"
      },
      {
        id: 2,
        name: "Treasure"
      },
      {
        id: 3,
        name: "Ashley"
      },
      {
        id: 4,
        name: "James"
      }
    ]
  };

  handleRemovePlayer = id => {
    this.setState( prevState => ({
      players: prevState.players.filter( p => p.id !== id)
    }));
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" totalPlayers={this.state.players.length} />
        {this.state.players.map(player => 
          <Player 
            key={player.id.toString()}
            player={player}
            removePlayer={this.handleRemovePlayer}
          />
        )}
      </div>
    );
  }
}

export default App;
