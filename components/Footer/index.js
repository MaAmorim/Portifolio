import React from 'react';
import styles from './styles.module.scss';

const Footer = ()=> {
  return(
    <footer className={styles.footer}>
      <p className={styles.footerText}>
        © 2022 Matheus Amorim. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;