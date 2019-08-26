import React from 'react';

const PhotoContent = ({ data }) => {
  // Wait for the data before returning anything
  if (!data) return <h3>Loading . . .</h3>;

  return <div className='photo-container'></div>;
};

export default PhotoContent;
