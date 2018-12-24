import React from 'react';
import PropTypes from 'prop-types';
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

Header.propTypes = {
  title: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.object)
};

export default Header;