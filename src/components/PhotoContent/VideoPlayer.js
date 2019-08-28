import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = props => {
  return <ReactPlayer url={props.data.url} playing controls />;
};

export default VideoPlayer;
