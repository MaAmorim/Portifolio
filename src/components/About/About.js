import React from 'react';
import { RevealWrapper } from 'next-reveal';
import Image from 'next/image';
import { AboutButton, AboutDescription, AboutProfilePicture, AboutSection, AboutSubtitle, AboutTitle } from './AboutStyles';

const About = (props) => {
  const handleAnchor = (ref) => {
    window.scrollTo({
      top: ref.offsetTop - 80,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <AboutSection ref={props.reference}>
      <div>
        <RevealWrapper reset={true} distance="100px" duration={2000} delay={250} origin="top">
          <AboutTitle>
            Sobre <strong>Mim</strong>
          </AboutTitle>
        </RevealWrapper>
        <AboutSubtitle>
          Desenvolvedor Frontend!
        </AboutSubtitle>
        <AboutDescription>
          Lorem ipsum tempus quam quisque cursus blandit magna,
          curae vulputate nisl dictumst eu ac hac, purus tristique sapien
          massa netus duis. dui fringilla porttitor congue leo et mattis ultrices
          nam vel pellentesque, rhoncus vivamus eget dolor quam est senectus volutpat risus.
          Potenti eget fusce conubia sagittis libero phasellus dapibus, porttitor sodales fames
          augue aliquam mattis, tristique volutpat magna vestibulum nam erat.
        </AboutDescription>
        <AboutButton onClick={() => handleAnchor(props.contact.current)}>
          Saiba Mais
        </AboutButton>
      </div>
      <div>
        <RevealWrapper reset={true} distance="100px" duration={2000} delay={250} origin="left">
          <AboutProfilePicture>
            <Image src="/images/profilePicture2.svg" height={400} width={400} alt="Profile Picture" />
          </AboutProfilePicture>
        </RevealWrapper>
      </div>

    </AboutSection>
  );
};

export default About;
