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
              Um bom desenvolvimento web traz benefícios como :
            </p>
            <ul>
              <li>Maior visibilidade</li>
              <li>Credibilidade</li>
              <li>Eficiência</li>
              <li>Redução de custos</li>
              <li>Melhor desempenho nos mecanismos de busca e acesso a novos mercados</li>
            </ul>
            <ServicesCardButton type="button" onClick={() => handleAnchor(props.contact.current)}>
              Saiba Mais
            </ServicesCardButton>
          </ServicesCard>
          <ServicesCard>
            <FaHammer />
            <h3>Transformação digital</h3>
            <p>
              A transformação digital traz benefícios como:
            </p>
            <ul>
              <li>melhor experiência do cliente</li>
              <li>novas oportunidades de negócios, </li>
              <li>redução de custos</li>
              <li>redução de custos</li>
              <li>maior competitividade</li>
            </ul>
            <ServicesCardButton type="button" onClick={() => handleAnchor(props.contact.current)}>
              Saiba Mais
            </ServicesCardButton>
          </ServicesCard>
          <ServicesCard>
            <FaUniversalAccess />
            <h3>Acessibilidade Web</h3>
            <p>
              A acessibilidade web traz benefícios para pessoas com deficiências 
              e limitações físicas, além de: 
            </p>
            <ul>
              <li>Melhorar a experiência do usuário para todos</li>
              <li>
                Aumentar a visibilidade e credibilidade do site nos mecanismos 
                de busca, expandindo o público alvo e atraindo mais tráfego orgânico.
              </li>
            </ul>
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
