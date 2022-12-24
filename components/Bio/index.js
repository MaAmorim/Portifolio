import React from 'react';
import styles from './style.module.scss';
import bioData from '/utils/bio.json';

const Bio = () => {
  return (
    <div className={styles.bio}>
      <h2 className={styles.title}>
        Bio
      </h2>
      <ul className={styles.eventList}>
        {
          bioData.importantDates.map((date, index)=>(
            
            <li className={styles.event} key={index}>
              <span className={styles.eventYear}>{date.year}</span>
              <div className={styles.yearDivider}></div>
              <div className={styles.eventDivider}></div>
              <span className={styles.eventDescription}>{date.event}</span>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Bio;