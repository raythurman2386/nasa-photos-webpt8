import React from 'react';

// Import images for the header
import nasaLogo from '../../assets/nasa-logo.svg';

// Import stylesheet till I refactor
import './header.scss';

const Header = () => {
  return (
    <div>
      <img src={nasaLogo} alt='NASA' />
      <h1>Hello Header</h1>
    </div>
  );
};

export default Header;
