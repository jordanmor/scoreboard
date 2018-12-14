import React, { Component } from 'react';
import Header from './components/header';
import Player from './components/player';

class App extends Component {

  state = {
    players: [
      {
        id: 1,
        name: "Guil",
        score: 0
      },
      {
        id: 2,
        name: "Treasure",
        score: 0
      },
      {
        id: 3,
        name: "Ashley",
        score: 0
      },
      {
        id: 4,
        name: "James",
        score: 0
      }
    ]
  };

  handleScoreChange = (index, delta) => {

    this.setState( prevState => ({
      players: prevState.players.map((player, i) => {
        if(i === index) player.score += delta;
        return player
      })
    }));

    // Another method
    // this.setState( prevState => {
    //   const players = [...prevState.players];
    //   players[index] = {...players[index]};
    //   players[index].score += delta;
    //   return {players};
    // });
  }

  handleRemovePlayer = id => {
    this.setState( prevState => ({
      players: prevState.players.filter( p => p.id !== id)
    }));
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" totalPlayers={this.state.players.length} />
        {this.state.players.map((player, index) => 
          <Player 
            key={player.id.toString()}
            player={player}
            index={index}
            removePlayer={this.handleRemovePlayer}
            changeScore={this.handleScoreChange}
          />
        )}
      </div>
    );
  }
}

export default App;
