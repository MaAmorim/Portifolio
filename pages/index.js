import Head from 'next/head'
import Bio from '../components/Bio';
import Cards from '../components/Cards';
import Header from '../components/Header';
import Profile from '../components/Profile';
import SocialMedia from '../components/SocialMedia';
import TitleText from '../components/TitleText';
import techsData from '/utils/techs.json';

export default function Home() {
  return (
    <>
      <Header />
      <Profile techData={techsData.techs}/>
      <TitleText 
        sectionTitle='Work'
        sectionText='Lorem ipsum dolor sit amet. Est quas blanditiis sed doloremque dolorem et inventore tenetur et exercitationem voluptatibus nam quasi inventore ut debitis delectus. Sit enim neque qui magnam minus a voluptate nobis est repellat ipsum At assumenda nostrum sit rerum quas eum facere porro.'
      />
      <Cards />
      <Bio />
      <TitleText 
        sectionTitle='About Me'
        sectionText='Lorem ipsum, dolor sit amet, Est quas blanditiis sed, doloremque dolorem et inventore.'
      />
      <SocialMedia />
    </>
  );
}
