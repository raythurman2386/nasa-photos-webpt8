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
        // setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [data]);

  return (
    <div className='App'>
      <Header />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
