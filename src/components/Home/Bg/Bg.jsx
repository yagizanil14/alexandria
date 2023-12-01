import React from 'react';
import bg from '../../../assets/images/bg.gif';

function Bg(props) {
  return (
    <div
      style={{
        background: `url(${bg})`,
        opacity: 0.2,

        zIndex: 1,
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        pointerEvents: 'none',
      }}></div>
  );
}

export default Bg;
