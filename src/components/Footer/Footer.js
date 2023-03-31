import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { FooterButton, FooterSection, FooterText } from './FooterStyles';

const Footer = (props) => {
  const handleAnchor = (ref) => {
    window.scrollTo({
      top: ref.offsetTop - 80,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <FooterSection>
      <FooterText>
        Copyright © 2023 by Matheus Amorim | All Rights Reserved.
      </FooterText>
      <FooterButton type="button" onClick={() => handleAnchor(props.home.current)}>
        <FaArrowUp />
      </FooterButton>
    </FooterSection>
  );
};

export default Footer;
