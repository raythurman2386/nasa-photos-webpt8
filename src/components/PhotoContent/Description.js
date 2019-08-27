import React from 'react';

const Description = ({ data }) => {
  return (
    <div>
      <p className='description'>{data.explanation}</p>
    </div>
  );
};

export default Description;
