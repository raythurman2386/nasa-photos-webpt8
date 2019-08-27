import React, { useState } from 'react';
// import the datepicker dependancy
import DatePicker from 'react-datepicker';

// datepicker styles
import 'react-datepicker/dist/react-datepicker.css';

const Datepicker = ({ startDate, setStartDate }) => {
  // Hook might need moved into the app component
  // const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker
      className='date-picker'
      dateFormat='yyyy/MM/dd'
      todayButton='Today'
      selected={startDate}
      onChange={date => setStartDate(date)}
    />
  );
};

export default Datepicker;
