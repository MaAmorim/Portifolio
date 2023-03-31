import React, { useEffect, useState } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';
import { Navbar, NavLinks, NavButton, NavTitleContainer, NavTitle, NavButtonContainer } from './HeaderStyles';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { home, about, services, projects, contact } = props.references;

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleAnchor = (ref) => {
    window.scrollTo({
      top: ref.offsetTop - 80,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <Navbar height={isOpen ? '270px' : '80px'} position={scrolled ? 'fixed' : 'relative'}>
      <NavTitleContainer>
        <NavTitle>Portfolio.</NavTitle>
      </NavTitleContainer>
      <NavButtonContainer>
        <NavButton type="button" onClick={() => handleOpen()}>
          { isOpen === false
            ? <MdMenu />
            : <MdClose />}
        </NavButton>
      </NavButtonContainer>
      <NavLinks>
        <a href={null} onClick={() => handleAnchor(home.current)}>Início</a>
        <a href={null} onClick={() => handleAnchor(about.current)}>Sobre</a>
        <a href={null} onClick={() => handleAnchor(services.current)}>Serviços</a>
        <a href={null} onClick={() => handleAnchor(projects.current)}>Portfolio</a>
        <a href={null} onClick={() => handleAnchor(contact.current)}>Contato</a>
      </NavLinks>
    </Navbar>
  );
};

export default Header;
