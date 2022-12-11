import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.devNameContainer}>
        <Image className={styles.computerImage} src='/images/computer.svg' width={72} height={73}/>
        <span className={styles.devName}>Matheus Amorim</span>
      </div>
    </header>
  )
}

export default Header;