import React from 'react';

// Import images for the header
import Logo from '../../assets/nasa-logo';

const Header = () => {
  return (
    <div>
      <img src={Logo} alt='NASA' />
      <h1>Hello Header</h1>
    </div>
  );
};

export default Header;
