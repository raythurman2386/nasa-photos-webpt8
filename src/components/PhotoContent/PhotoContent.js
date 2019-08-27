import React from 'react';

// Import Components
import Image from './Image';
import Description from './Description';

const PhotoContent = ({ data }) => {
  // Wait for the data before returning anything
  if (!data) return <h3>Loading . . .</h3>;

  return (
    <div className='photo-container'>
      <Image data={data} />
      <Description data={data} />
    </div>
  );
};

export default PhotoContent;
