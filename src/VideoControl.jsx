import React, { useRef } from 'react';

const VideoControl = () => {
  const videoRef = useRef(null);

  const playVideo = () => {
    videoRef.current.play();
  };

  const pauseVideo = () => {
    videoRef.current.pause();
  };

  return (
    <div>
      <video ref={videoRef} width="400" controls>
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
        Tarayıcınız video etiketini desteklemiyor.
      </video>
      <div>
        <button onClick={playVideo}>Oynat</button>
        <button onClick={pauseVideo}>Durdur</button>
      </div>
    </div>
  );
};

export default VideoControl;
