import { useEffect, useState } from 'react';
import img1 from '../../../assets/images/wallet.d32b738e.png';
import img2 from '../../../assets/images/card-top.png';
import img3 from '../../../assets/images/wallet.png';
import styles from './landing.module.scss';
function Landing(props) {
  const [cardPosition, setCardPosition] = useState(100);
  const [zndex, setzndex] = useState(0);
  const [styleCard, setStyleCard] = useState(false);

  const isMobile = window.innerWidth < 600;
  const handleScroll = () => {
    const position = window.pageYOffset / 3;
    console.log(position);

    //setElementsBottomNumber
    const setElementsBottomNumber = isMobile ? 275 : 400;
    if (position < setElementsBottomNumber) {
      setStyleCard(false);
    }
    if (position > setElementsBottomNumber) {
      setStyleCard(true);
    }
    //setElementsBottomNumber

    //animation
    const isPositionBigZero = isMobile ? 0 : 0;
    const isPositionSmall = isMobile ? 185 : 250;

    const isPositionBigShow = isMobile ? 185 : 250;
    const isPositionSmallShow = isMobile ? 263 : 375;

    const oneIfCardPosition = isMobile ? 100 : 100;
    const twoIfCardPosition = isMobile ? -270 : -395;

    if (position >= isPositionBigZero && position <= isPositionSmall) {
      setzndex(0);
      let newPos = oneIfCardPosition - position;
      setCardPosition(newPos);
    } else if (
      position >= isPositionBigShow &&
      position <= isPositionSmallShow
    ) {
      setzndex(1);
      let newPos2 = twoIfCardPosition + position;
      setCardPosition(newPos2);
    }
    //animation
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={styles.landingWr}>
        <div
          style={{
            position: styleCard ? 'absolute' : 'fixed',
            bottom: styleCard && 0,
          }}
          className={styles.contentWr}>
          <h1 className={styles.headTitle}>Library of Alexandria</h1>

          <img src={img1} alt="card" className={styles.img1} />
          <img
            className={styles.img2}
            src={img2}
            alt="card"
            style={{
              marginTop: cardPosition,
              zIndex: zndex,
            }}
          />
          <img className={styles.img3} src={img3} alt="card" />
        </div>
      </div>
    </>
  );
}

export default Landing;
