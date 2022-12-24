import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss'

const SocialMedia = ()=> {
  return (
    <div className={styles.socialMedia}>
      <a className={styles.link} href="https://www.linkedin.com/in/matheus-amorim-developer/" target="_blank" rel='noreferrer'>
        <Image src="/images/socialMedia/linkedin-icon.svg" width={45} height={45} alt="linkedin logo"/>
        <span className={styles.linkName}>LinkedIn</span>
      </a>
      <a className={styles.link} href="" target="_blank" rel='noreferrer'>
        <Image src="/images/socialMedia/github-icon.svg" width={45} height={45} alt="github logo"/>
        <span className={styles.linkName}>GitHub</span>
      </a>
    </div>
  );
}

export default SocialMedia;