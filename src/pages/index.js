import React, { createContext, useRef } from 'react';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Services from '../components/Services/Services';
import About from '../components/About/About';

export const DeviceContext = createContext();

const Home = () => {
  const home = useRef(null);
  const about = useRef(null);
  const services = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  return (
    <>
      <Header references={{ home, about, services, projects, contact }} />
      <Hero reference={home} />
      <About reference={about} contact={contact} />
      <Services reference={services} contact={contact} />
      <Projects reference={projects} />
      <Contact reference={contact} />
      <Footer home={home} />
    </>
  );
};

export default Home;
