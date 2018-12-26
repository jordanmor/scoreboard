import React, { Component } from 'react';
import { Provider } from './Context';
import Header from './header';
import Player from './player';
import AddPlayerForm from './addPlayerForm';

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

  getHighScore = () => {
    const scores = this.state.players.map( p => p.score );
    const highScore = Math.max(...scores);
    return highScore ? highScore : null;
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
    const highScore = this.getHighScore();

    return (
      <Provider value={this.state.players}>
        <div className="scoreboard">

          <Header />

          {this.state.players.map((player, index) => 
            <Player 
              key={player.id.toString()}
              player={player}
              index={index}
              removePlayer={this.handleRemovePlayer}
              changeScore={this.handleScoreChange}
              isHighScore={highScore === player.score}
            />
          )}

          <AddPlayerForm addPlayer={this.handleAddPlayer}/>
          
        </div>
      </Provider>
    );
  }
}

export default App;
