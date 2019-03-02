import React, { useState } from "react";
import Chunk from "../../shared/Chunk";

import YouTube from "react-youtube";
const videoIdA = "XxVg_s8xAms";
const videoIdB = "-DX3vJiqxm4";

const Youtube = () => {
  const [videoId, setVideoId] = useState(videoIdA);
  const [player, setPlayer] = useState(null);

  const onReady = event => setPlayer(event.target);
  const onPlayVideo = () => player.playVideo();
  const onPauseVideo = () => player.pauseVideo();
  const onChangeVideo = () =>
    setVideoId(videoId === videoIdA ? videoIdB : videoIdA);

  return (
    <Chunk>
      Youtube
      <YouTube videoId={videoId} onReady={onReady} />
      <button onClick={onPlayVideo}>Play</button>
      <button onClick={onPauseVideo}>Pause</button>
      <button onClick={onChangeVideo}>Change Video</button>
    </Chunk>
  );
};

export default Youtube;
