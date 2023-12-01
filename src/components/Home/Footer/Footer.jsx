import React from 'react';
import styles from './footer.module.scss';
import logo from '../../../assets/images/logo.png';
function Footer(props) {
  return (
    <div className={styles.footer}>
      <div className={styles.footerWr}>
        <img src={logo} alt="" />
        <div className={styles.footerDesc}>
          FAQ
          <br />
          Terms & Conditions
          <br />
          Copyright Poolsuite™ 2021
        </div>
      </div>
    </div>
  );
}

export default Footer;
