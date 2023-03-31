import Image from 'next/image';
import React, { useEffect } from 'react';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { RevealWrapper } from 'next-reveal';
import Typed from 'typed.js';
import { HeroDescription, HeroDownloadButton, HeroPresentation, HeroProfilePicture, HeroSection, HeroSocialMedia } from './HeroStyles';

const Hero = (props) => {
  const words = [
    'Desenvolvedor Frontend.',
    'Freelancer.',
    'Consultor de Acessibilidade Web.',
    'Apaixonado por tecnologia.',
  ];

  useEffect(() => {
    const options = {
      strings: words,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    };
    const typed = new Typed('#textTarget', options);
  }, []);

  return (
    <HeroSection ref={props.reference}>
      <RevealWrapper reset={true} distance="100px" duration={2000} delay={250} origin="top">
        <HeroPresentation>
          <span>Olá, sou o </span>
          <RevealWrapper reset={true} distance="100px" duration={2000} delay={250} origin="left">
            <h1>Matheus Amorim</h1>
          </RevealWrapper>
          <span>
            E sou <strong id="textTarget"> Desenvolvedor Fontend!</strong>
          </span>
          <RevealWrapper reset={true} distance="100px" duration={2000} delay={250} origin="right">
            <HeroDescription>
              Sou um desenvolvedor de software com experiência em Adobe Experience Manager, 
              Node.js, JavaScript, React e Next.js. Desenvolvo soluções web personalizadas 
              com AEM, aplicativos de servidor escaláveis com Node.js e aplicativos front-end 
              reativos com JavaScript e React. Além disso, crio aplicativos front-end de alto 
              desempenho e interativos com Next.js.
            </HeroDescription>
          </RevealWrapper>
          <HeroSocialMedia>
            <a href="https://www.facebook.com/matheus.amorim.5648/" aria-label="Ir para: Facebook">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/_math.amorim/" aria-label="Ir para: Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/matheus-amorim-developer/" aria-label="Ir para: Linkedin">
              <FaLinkedin />
            </a>
          </HeroSocialMedia>
          <HeroDownloadButton
            href="/documents/matheus_amorim_cv.pdf"
            download="Matheus Amorim CV"
            aria-label="Baixe o Currículo"
          >
            Download CV
          </HeroDownloadButton>
        </HeroPresentation>
      </RevealWrapper>
      <RevealWrapper reset={true} distance="100px" duration={2000} delay={250} origin="bottom">
        <HeroProfilePicture>
          <Image src="/images/profilePicture.svg" height={400} width={400} alt="Profile Picture" />
        </HeroProfilePicture>
      </RevealWrapper>
    </HeroSection>
  );
};

export default Hero;
