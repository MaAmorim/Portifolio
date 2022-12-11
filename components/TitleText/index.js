import React from 'react';
import styles from'./styles.module.scss'

const TitleText = (props)=> {
  return (
    <section className={styles.titleText}>
      <h2 className={styles.title}>
        {props.sectionTitle}
      </h2>
      <p className={styles.text}>
        {props.sectionText}
      </p>
    </section>
  );
}

export default TitleText;