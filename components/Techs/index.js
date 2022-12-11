import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import data from './techs.json';

const Techs = ()=> {
  return (
    <ul className={styles.techList}>
      {
        data.techs.map(( tech, index )=> (
          <li key={index} className={styles.tech}>
            <div>
              <Image className={styles.techIcon} src={tech.icon.path} title={tech.name} height={82} width={82} alt={`${tech.name} icon`}/>
            </div>
          </li>
        ))
      }
    </ul>
  );
}

export default Techs;