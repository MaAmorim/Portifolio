import React from 'react';
import { FaCode, FaHammer, FaUniversalAccess } from 'react-icons/fa';
import { RevealWrapper } from 'next-reveal';
import { ServicesCardButton, ServicesCard, ServicesContainer, ServicesSection, ServicesTitle } from './ServicesStyles';

const Services = (props) => {
  const handleAnchor = (ref) => {
    window.scrollTo({
      top: ref.offsetTop - 80,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ServicesSection ref={props.reference}>
      <RevealWrapper reset={true} distance="100px" duration={2000} delay={250} origin="top">
        <ServicesTitle>Nossos<strong> Serviços</strong></ServicesTitle>
      </RevealWrapper>
      <RevealWrapper reset={true} distance="100px" duration={2000} delay={250} origin="bottom">
        <ServicesContainer>
          <ServicesCard>
            <FaCode />
            <h3>Desenvolvimento Web</h3>
            <p>
              Lorem ipsum tempus quam quisque cursus blandit magna,
              curae vulputate nisl dictumst eu ac hac, purus tristique
              sapien massa netus duis.
            </p>
            <ServicesCardButton type="button" onClick={() => handleAnchor(props.contact.current)}>
              Saiba Mais
            </ServicesCardButton>
          </ServicesCard>
          <ServicesCard>
            <FaHammer />
            <h3>Transformação digital</h3>
            <p>
              Lorem ipsum tempus quam quisque cursus blandit magna,
              curae vulputate nisl dictumst eu ac hac, purus tristique
              sapien massa netus duis.
            </p>
            <ServicesCardButton type="button" onClick={() => handleAnchor(props.contact.current)}>
              Saiba Mais
            </ServicesCardButton>
          </ServicesCard>
          <ServicesCard>
            <FaUniversalAccess />
            <h3>Acessibilidade Web</h3>
            <p>
              Lorem ipsum tempus quam quisque cursus blandit magna,
              curae vulputate nisl dictumst eu ac hac, purus tristique
              sapien massa netus duis.
            </p>
            <ServicesCardButton type="button" onClick={() => handleAnchor(props.contact.current)}>
              Read More
            </ServicesCardButton>
          </ServicesCard>
        </ServicesContainer>
      </RevealWrapper>
    </ServicesSection>

  );
};

export default Services;
