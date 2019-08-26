import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import api key
import { apiKey } from '../private/private';

// Component imports
import Header from './Header/Header';

// Styles
import './App.scss';

function App() {
  // State hook for when I pull the data
  const [data, setData] = useState();

  // Here is where i'll put the useEffect when I get there
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then(res => {
        console.log(res.data, 'results');
        setData({
          date: res.data.date,
          desc: res.data.explanation,
          title: res.data.title,
          media_type: res.data.media_type,
          url: res.data.url,
        });
        console.log(data, 'data');
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className='App'>
      <Header />
    </div>
  );
}

export default App;
