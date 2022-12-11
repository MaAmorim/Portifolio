import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import cardsData from '/utils/cards.json';

const Cards = ()=> {
  return (
    <div className={styles.container}>
      {
        cardsData.cards.map((card)=> (
          <div className={styles.card}>
            <div className={`${styles.face} ${styles.face1}`}>
              <div className={styles.content}>
                <Image className={styles.logo} src={card.icon.path} width={0} height={0} alt={`${card.name} logo`}/>
                <h3>{card.name}</h3>
              </div>
            </div>
            <div className={`${styles.face} ${styles.face2}`}>
              <div className={styles.content}>
                <p className={styles.text}>{card.text}</p>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default Cards;