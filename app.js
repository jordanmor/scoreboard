const players = [
  {
    id: 1,
    name: "Guil",
    score: 50
  },
  {
    id: 2,
    name: "Treasure",
    score: 85
  },
  {
    id: 3,
    name: "Ashley",
    score: 95
  },
  {
    id: 4,
    name: "James",
    score: 80
  }
];

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

const App = props => {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={props.initialPlayers.length} />
      {props.initialPlayers.map(player => 
        <Player 
          key={player.id.toString()}
          name={player.name}
          score={player.score}
        />
      )}
    </div>
  );
}

ReactDOM.render(
  <App initialPlayers={players} />,
  document.getElementById('root')
);