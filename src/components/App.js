import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Component imports

// Styles
import './App.scss';

function App() {
  // State hook for when I pull the data
  const [data, setData] = useState();

  // Here is where i'll put the useEffect when I get there

  return (
    <div className='App'>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
