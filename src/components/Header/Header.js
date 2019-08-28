import React from 'react';

// Import images for the header
import nasaLogo from '../../assets/nasa-logo.svg';

// Import datepicker component
import Datepicker from './Datepicker';

// Import stylesheet till I refactor
import './header.scss';

const Header = ({ data, startDate, setStartDate, newUrl }) => {
  // wait for the data before rendering
  if (!data)
    return (
      <div>
        <img src={nasaLogo} alt='NASA' />
        <h1>NASA Photo of the Day</h1>
        <Datepicker
          startDate={startDate}
          setStartDate={setStartDate}
          newUrl={newUrl}
        />
      </div>
    );

  return (
    <div className='header-footer'>
      <div className='flexed-header'>
        <img src={nasaLogo} alt='NASA' />
        <h1>NASA Photo of the Day</h1>
        <Datepicker
          startDate={startDate}
          setStartDate={setStartDate}
          newUrl={newUrl}
        />
      </div>
      <h2>{data.title}</h2>
    </div>
  );
};

export default Header;
