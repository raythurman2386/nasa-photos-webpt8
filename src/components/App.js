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

  // Here is where i'll put the useEffect when I get there
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}?date="2019/08/27"`,
      )
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='App'>
      <Header data={data} />
      <PhotoContent data={data} />
      <Footer />
    </div>
  );
}

export default App;
