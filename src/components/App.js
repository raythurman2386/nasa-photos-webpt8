import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import api key
import { apiKey } from '../private/private';

// Component imports
import Header from './Header/Header';
import PhotoContent from './PhotoContent/PhotoContent';
import Footer from './Footer/Footer';

// Styles
import './App.scss';

function App() {
  // State hook for when I pull the data
  const [data, setData] = useState();
  // const [url, newUrl] = useState(
  //   `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`,
  // );

  // moving the hook for the date here
  const [startDate, setStartDate] = useState('');

  // Here is where i'll put the useEffect when I get there
  useEffect(() => {
    if (startDate !== '') {
      axios
        .get(
          `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${startDate}`,
        )
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    } else {
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }
  }, [startDate]);

  return (
    <div className='App'>
      <Header data={data} startDate={startDate} setStartDate={setStartDate} />
      <PhotoContent data={data} />
      <Footer />
    </div>
  );
}

export default App;
