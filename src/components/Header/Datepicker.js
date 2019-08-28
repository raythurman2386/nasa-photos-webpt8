import React, { useState } from 'react';
// import the datepicker dependancy
import DatePicker from 'react-datepicker';

// import api key
import { apiKey } from '../../private/private';

// datepicker styles
import 'react-datepicker/dist/react-datepicker.css';

const Datepicker = ({ newUrl }) => {
  // Hook might need moved into the app component
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker
      className='date-picker'
      dateFormat='yyyy-MM-dd'
      todayButton='Today'
      selected={startDate}
      onChange={date => {
        setStartDate(date);
        newUrl(
          `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${startDate}`,
        );
      }}
    />
  );
};

export default Datepicker;
