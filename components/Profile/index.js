import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import Techs from '../Techs';

const Profile = (props) => {
  return (
    <div className={styles.profile}>
      <Image src='/images/profilePicture.svg' height={381} width={381} alt='Imagem de perfil' />
      <h1 className={styles.devName}>Matheus Amorim</h1>
      <h2 className={styles.devDescription}>
        Digital Craftsman ( Artist / Developer )
      </h2>
      <Techs techData={props.techData}/>
      <span className={styles.devInfo}>
        Hello, I&aposm a Web Developer based in Brazil!
      </span>
    </div>
  );
}

export default Profile;