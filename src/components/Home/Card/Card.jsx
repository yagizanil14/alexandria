import React, { useState } from 'react';
import styles from './card.module.scss';
import cardImage from '../../../assets/images/card-yatay-2.png';
import videoCardImage from '../../../assets/images/yatay-card-video-image.png';
import { VideoPlayerIcon } from '../../../assets/icons';
import VideoPopup from '../VideoPopup/VideoPopup';
function Card(props) {
  const [videoPopup, setVideoPopup] = useState(false);
  /*
  const [marginCardState,setMarginCard]=useState(0)
  var marginCard = 0
  useEffect(()=>{
    animatedCard()
  },[])
  const animatedCard = () =>{
    setTimeout(function() {
      console.log(marginCardState);
      setMarginCard(marginCardState+1)
      if (marginCardState <= 50) {
        animatedCard();
      }else{
        animatedCard2()
      }
      return marginCard;
    }, 100)
  }
  const animatedCard2 = () =>{
    setTimeout(function() {   //  call a 3s setTimeout when the loop is called
      console.log(marginCardState);   //  your code here
      setMarginCard(marginCardState+1)
      if (marginCardState > -49) {           //  if the counter < 10, call the loop function
        animatedCard2();             //  ..  again which will trigger another 
      }else{
        animatedCard()
      }                       //  ..  setTimeout()
    }, 100)
  }
   */

  return (
    <React.Fragment>
      <div className={styles.cardSection}>
        <h1 className={styles.headTitle}> NEW ERA OF THE LIBRARY</h1>
        <div className={styles.cardImageWr}>
          <img className={styles.headCardImage} src={cardImage} alt="card" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="55%"
            height="208"
            viewBox="0 0 593 208"
            fill="none">
            <path
              opacity="0.6"
              d="M52.8361 14.1025C55.4233 5.71864 63.1728 0 71.9468 0H510.118C518.487 0 525.971 5.21095 528.875 13.0601L591.033 181.06C595.865 194.121 586.202 208 572.275 208H20.1026C6.63959 208 -2.97802 194.967 0.991881 182.102L52.8361 14.1025Z"
              fill="#2D342C"
            />
          </svg>
        </div>
        <div className={styles.content}>
          <div className={styles.infos}>
            <h1> NEW ERA OF THE LIBRARY</h1>
            <h2>COMPLIMENTARY FOR OUR DISTINGUISHED GUESTS</h2>
            <p>
              Originally gifted to friends & benefactors of the Poolsuite
              organisation, holding this card suggests a firm connection to the
              “upper crust” of the internet’s most leisurely constituents.
            </p>
          </div>
          <div className={styles.action}>
            <div
              className={styles.videoImageSection}
              onClick={() => setVideoPopup(true)}>
              <img src={videoCardImage} alt="videoCardImage" />
              <VideoPlayerIcon />
            </div>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 306 48"
                fill="none">
                <rect
                  x="0.5"
                  y="0.5"
                  width="305"
                  height="47"
                  fill="#364134"
                  stroke="black"
                />
                <rect
                  x="0.974609"
                  y="0.960205"
                  width="304.051"
                  height="0.96"
                  fill="#687765"
                />
                <rect
                  x="0.974609"
                  y="0.960205"
                  width="0.974522"
                  height="46.08"
                  fill="#687765"
                />
                <rect
                  x="305.025"
                  y="47.04"
                  width="304.051"
                  height="0.959974"
                  transform="rotate(-180 305.025 47.04)"
                  fill="#272D26"
                />
                <rect
                  x="305.025"
                  y="47.04"
                  width="0.974526"
                  height="45.12"
                  transform="rotate(-180 305.025 47.04)"
                  fill="#272D26"
                />
              </svg>
              <h1>Buy</h1>
            </button>
          </div>
        </div>

        {videoPopup && <VideoPopup close={() => setVideoPopup(false)} />}
      </div>
    </React.Fragment>
  );
}

export default Card;
