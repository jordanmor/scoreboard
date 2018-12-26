import React from 'react';
import Header from './header';
import PlayerList from './playerList';
import AddPlayerForm from './addPlayerForm';

const App = () => {
  return (
    <div className="scoreboard">
      <Header />
      <PlayerList />
      <AddPlayerForm />
    </div>
  );
}

export default App;
