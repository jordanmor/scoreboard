import React from 'react';
import Stats from './stats';
import StopWatch from './stopWatch';

const Header = ({ players, title }) => {
  return (
    <header>
      <Stats players={players} />
      <h1>{title}</h1>
      <StopWatch />
    </header>
  );
}

export default Header;