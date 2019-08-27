import React from 'react';

const Image = ({ data }) => {
  return (
    <div className='image-container'>
      <img className='main-img' src={data.url} alt={data.title} />
    </div>
  );
};

export default Image;
