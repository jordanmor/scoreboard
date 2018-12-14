import React, { Component } from 'react';
import Header from './components/header';
import Player from './components/player';
import AddPlayerForm from './components/addPlayerForm';

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

  // player id counter
  prevPlayerId = 4;

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

  handleAddPlayer = name => {
    this.setState(prevState => {
      return {
        players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id: this.prevPlayerId += 1
          }
        ]
      };
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          players={this.state.players}
        />
        {this.state.players.map((player, index) => 
          <Player 
            key={player.id.toString()}
            player={player}
            index={index}
            removePlayer={this.handleRemovePlayer}
            changeScore={this.handleScoreChange}
          />
        )}
        <AddPlayerForm addPlayer={this.handleAddPlayer}/>
      </div>
    );
  }
}

export default App;
