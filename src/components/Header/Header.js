import React from 'react';

// Import images for the header
import nasaLogo from '../../assets/nasa-logo.svg';

// Import datepicker component
import Datepicker from './Datepicker';

// Import stylesheet till I refactor
import './header.scss';

const Header = ({ data }) => {
  // wait for the data before rendering
  if (!data)
    return (
      <div>
        <img src={nasaLogo} alt='NASA' />
        <h1>NASA Photo of the Day</h1>
        <Datepicker />
      </div>
    );

  return (
    <div className='header-footer'>
      <img src={nasaLogo} alt='NASA' />
      <h1>NASA Photo of the Day</h1>
      <h2>{data.title}</h2>
      <Datepicker />
    </div>
  );
};

export default Header;
