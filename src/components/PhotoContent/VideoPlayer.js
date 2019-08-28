import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ data }) => {
  return <ReactPlayer url={data.url} />;
};

export default VideoPlayer;
