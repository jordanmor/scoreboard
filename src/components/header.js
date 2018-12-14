import React from 'react';
import Stats from './stats';

const Header = ({ players, title }) => {
  return (
    <header>
      <Stats players={players} />
      <h1>{title}</h1>
    </header>
  );
}

export default Header;