import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import img1 from './media/wallet.d32b738e.png';
import img2 from './media/card-top.3240fbed.png';
import img3 from './media/wallet-overlay.d99141bf.png';

function App() {
  const [cardPosition, setCardPosition] = useState(100);
  const [zndex, setzndex] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position >= 0 && position <= 180) {
      setzndex(0);
      let newPos = 100 - position;
      setCardPosition(newPos);
    } else if (position >= 180 && position <= 400) {
      setzndex(1);
      let newPos2 = -257 + position;
      setCardPosition(newPos2);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div
      style={{
        width: '100%',
        height: 2600,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
      }}>
      <div
        style={{
          width: 500,
          height: 600,
          paddingLeft: 550,
          paddingTop: 150,
          position: 'fixed',
        }}>
        <img
          src={img1}
          alt="Girl in a jacket"
          width="500"
          height="600"
          style={{ position: 'absolute' }}
        />
        <img
          src={img2}
          alt="Girl in a jacket"
          width="440"
          height="280"
          style={{
            position: 'absolute',
            marginLeft: 30,
            marginTop: cardPosition,
            zIndex: zndex,
          }}
        />
        <img
          src={img3}
          alt="Girl in a jacket"
          width="500"
          height="600"
          style={{ position: 'absolute' }}
        />
      </div>
    </div>
  );
}

export default App;
