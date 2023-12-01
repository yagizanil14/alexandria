import React from 'react';
import styles from './welcome.module.scss';

//cards
import card1 from '../../../assets/images/card-1.jpg';
import card1Bottom from '../../../assets/images/card-1-bottom.png';
import card2 from '../../../assets/images/card-2.jpg';
import card2Bottom from '../../../assets/images/card-2-bottom.png';
import card3 from '../../../assets/images/card-3.jpg';
import card3Bottom from '../../../assets/images/card-3-bottom.png';
const Hr = () => {
  return <div className={styles.hr}></div>;
};
const Button = ({ href, text }) => {
  return (
    <a
      className={styles.cardButton}
      rel="noopener noreferrer"
      target="_blank"
      href={href}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="40"
        width="100%"
        viewBox="0 0 100% 40"
        fill="none">
        <path
          d="M0.5 0.5H314.5V39.5H0.5V0.5Z"
          fill="#768D81"
          stroke="#202D21"
        />
        <rect x="2" y="1" width="312" height="1" fill="#91A49A" />
        <rect x="1" y="1" width="1" height="37" fill="#91A49A" />
        <rect
          x="314"
          y="39"
          width="313"
          height="0.999973"
          transform="rotate(-180 314 39)"
          fill="#607369"
        />
        <rect
          x="314"
          y="39"
          width="1"
          height="37"
          transform="rotate(-180 314 39)"
          fill="#607369"
        />
      </svg>
      <h1>{text}</h1>
    </a>
  );
};

function Welcome(props) {
  return (
    <div className={styles.welcome}>
      <div className={styles.welcomeWr}>
        <Hr />
        <div className={styles.welcomeContentWr}>
          <div className={styles.content}>
            <h1 className={styles.headTitle1}>
              Welcome to the Library of Alexandria club.
            </h1>
            <div className={styles.desc}>
              <p>
                Poolsuite is an ultra-leisure internet organisation which has
                been serving a loyal community of millions of listeners, at no
                cost, since 2014. We stand devoted to bringing “the good life”
                to you via any means and medium necessary.
              </p>
              <p>
                With growing ambitions to push the boundaries of what a business
                can be, we invite you to follow along and work with us to create
                a new approach to commerce; further concerned with entertainment
                and excitement than profit.
              </p>
            </div>
            <div className={styles.cards}>
              <div className={styles.card}>
                <Hr />
                <img
                  className={styles.cardTopImage}
                  width={'100'}
                  src={card1}
                  alt={'a'}
                />
                <div className={styles.bottomImages}>
                  <h1>
                    Dive into
                    <br />
                    Poolsuite
                    <br />
                    online
                  </h1>
                  <img
                    width={'100'}
                    className={styles.cardBottomImage}
                    src={card1Bottom}
                    alt="s"
                  />
                </div>
                <p>
                  A luxury internet experience featuring hand-crafted playlists,
                  corporate updates & more.
                </p>
                <Button href="/" text={'Visit'} />

                <Hr />
              </div>
              <div className={styles.card}>
                <Hr />
                <img className={styles.cardTopImage} src={card2} alt={'a'} />
                <div className={styles.bottomImages}>
                  <h1>
                    Poolsuite FM
                    <br />
                    for iPhone
                    <br />
                    and Macintosh
                  </h1>
                  <img
                    className={styles.cardBottomImage}
                    src={card2Bottom}
                    alt="s"
                  />
                </div>
                <p>
                  Recently nominated for an Apple Design Award and featured as
                  Worldwide App of the Day
                </p>
                <Button href="/" text={'Visit'} />
                <Hr />
              </div>
              <div className={styles.card}>
                <Hr />
                <img className={styles.cardTopImage} src={card3} alt={'a'} />
                <div className={styles.bottomImages}>
                  <h1>
                    Discover
                    <br />
                    @poolsuite
                    <br />
                    on Instagram
                  </h1>
                  <img
                    width={'100'}
                    className={styles.cardBottomImage}
                    src={card3Bottom}
                    alt="s"
                  />
                </div>
                <p>
                  Get to know the Poolsuite brand world inspirations and
                  aspirations through your cellular device.
                </p>
                <Button href="/" text={'Visit'} />

                <Hr />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.topShadow}></div>
    </div>
  );
}

export default Welcome;
