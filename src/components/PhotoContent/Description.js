import React from 'react';

//import styles
import './photo.scss';

const Description = ({ data }) => {
  return (
    <div>
      <p className='description'>{data.explanation}</p>
    </div>
  );
};

export default Description;
