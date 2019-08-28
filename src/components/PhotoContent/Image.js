import React from 'react';
import { Player } from 'video-react';

const Image = ({ data }) => {
  // add the logic to display the videos
  // If the media_type is === "video"
  // data.media_type === 'video' && < Add React video component here />

  if (data.media_type === 'image') {
    return (
      <div className='image-container'>
        <img className='main-img' src={data.url} alt={data.title} />
      </div>
    );
  } else {
    return (
      <Player>
        <source src={data.url} />
      </Player>
    );
  }
};

export default Image;
