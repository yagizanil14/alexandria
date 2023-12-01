import React from 'react';
import style from './videopopup.module.scss';
function VideoPopup(props) {
  return (
    <>
      <div className={style.videoPopup} style={{ width: '600px' }}>
        <iframe
          width="500"
          height="500"
          src="https://www.youtube.com/embed/iG-IkhRTg1o"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>
      <button onClick={props.close} className={style.shadowBox}></button>
    </>
  );
}

export default VideoPopup;
