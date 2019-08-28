import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = props => {
  return (
    <ReactPlayer
      style={{ margin: 'auto' }}
      url={props.data.url}
      playing
      controls
    />
  );
};

export default VideoPlayer;
