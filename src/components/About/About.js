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
          Sempre tive um grande interesse por tecnologia e me dediquei desde cedo a estudar 
          programação. Durante meu curso de graduação em Sistemas de Informação, comecei a 
          trabalhar como desenvolvedor em uma grande consultoria de Tecnologia, onde tive a 
          oportunidade de aprender muito e aprimorar as habilidades que já tinha. 
          <br />
          <br />
          Com o passar do tempo, percebi que gostava de trabalhar em projetos grandes 
          e desafiadores. Decidi então focar em empresas de grande porte, principalmente bancos 
          e empresas de telecomunicações, que são áreas com grande demanda por soluções 
          tecnológicas de ponta. Trabalhei ao lado de excelentes profissionais ao longo de minha 
          carreira. Absorvi muito conhecimento técnico e pessoal desses profissionais o que me fez 
          apto a desenvolver sempre um bom trabalho e entender as necessidades dos meus pares e 
          clientes.
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
