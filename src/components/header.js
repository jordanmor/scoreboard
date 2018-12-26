import React from 'react';
import Stats from './stats';
import StopWatch from './stopWatch';

const Header = () => {
  return (
    <header>
      <Stats />
      <h1>Scoreboard</h1>
      <StopWatch />
    </header>
  );
}

export default Header;