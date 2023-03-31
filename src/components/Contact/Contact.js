import React, { useState } from 'react';
import { RevealWrapper } from 'next-reveal';
import emailJs from '@emailjs/browser';
import { ContactButton, ContactForm, ContactInput, ContactSection, ContactTitle } from './ContactStyles';
import Loader from '../Loader/Loader';

const Contact = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const templateParams = {
      from_name: name,
      email: email,
      phone: phone,
      subject: subject,
      message: message,
    };

    emailJs.send(
      'service_gahal0c',
      'template_cgyso7c',
      templateParams,
      'tAxAOa5CCbmUBBliA',
    ).then(() => {
      setIsLoading(false);
      alert('E-mail enviado com sucesso!');
      setName('');
      setEmail('');
      setPhone('');
      setSubject('');
      setMessage('');
    }, (err) => {
      console.log('Error ', err);
    });
  };

  return (
    <ContactSection ref={props.reference}>
      {isLoading && (
        <Loader />
      )}
      <RevealWrapper reset={true} distance="100px" duration={2000} delay={250} origin="top">
        <ContactTitle>Entre em<strong> Contato</strong></ContactTitle>
      </RevealWrapper>
      <RevealWrapper reset={true} distance="100px" duration={2000} delay={250} origin="bottom">
        <ContactForm onSubmit={handleSubmit}>
          <ContactInput
            type="text"
            placeholder="Nome Completo"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
          <ContactInput
            type="email"
            inputMode="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <ContactInput
            type="text"
            inputMode="tel"
            placeholder="Telefone"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            required
          />
          <ContactInput
            type="text"
            placeholder="Assunto do Email"
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
            required
          />
          <textarea
            placeholder="Mensagem"
            rows={15}
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            required
          />
          <ContactButton disabled={!!isLoading}>
            Enviar Mensagem
          </ContactButton>
        </ContactForm>
      </RevealWrapper>
    </ContactSection>
  );
};

export default Contact;
