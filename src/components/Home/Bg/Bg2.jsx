import React from 'react';
import bg2 from '../../../assets/images/b2.png';
function Bg2(props) {
  return (
    <div
      style={{
        backgroundImage: `url(${bg2})`,
        backgroundColor: '#4c6458',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        position: 'fixed',
        zIndex: 1,
        height: '100vh',
      }}></div>
  );
}

export default Bg2;
