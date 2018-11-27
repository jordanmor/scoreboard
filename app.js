const Header = props => {
  return (
    <header>
      <h1>{props.title}</h1>
      <span className='stats'>Players: {props.totalPlayers}</span>
    </header>
  );
}

const Counter = props => {
  return (
    <div className='counter'>
      <button className='counter-action decrement'> - </button>
      <span className="counter-score">{props.score}</span>
      <button className='counter-action increment'> + </button>
    </div>
  );
}

const Player = props => {
  return (
    <div className='player'>
      <span className="player-name">
        {props.name}
      </span>
      <Counter score={props.score} />
    </div>
  );
}

class App extends React.Component {

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
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" totalPlayers={this.state.players.length} />
        {this.state.players.map(player => 
          <Player 
            key={player.id.toString()}
            name={player.name}
            score={player.score}
          />
        )}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);