import React from 'react';

const Image = ({ data }) => {
  // add the logic to display the videos
  // If the media_type is === "video"
  // data.media_type === 'video' && < Add React video component here />

  return (
    <div className='image-container'>
      <img className='main-img' src={data.url} alt={data.title} />
    </div>
  );
};

export default Image;
