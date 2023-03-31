import styled from 'styled-components';

export const ContactSection = styled.section`
  padding: 20px 5%;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1024px) {
    height: 100vh;
  }

  @media screen and (min-width: 1360px) {
   padding: 20px 15%;
  }
`;

export const ContactTitle = styled.h2`
  font-size: 36px;
  margin-top: 0;

  @media screen and (min-width: 1024px) {
    font-size: 40px;
  }

  strong {
    color: #8be9fd;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;

  textarea {
    max-width: 1212px;
    width: 100%;
    background-color: #44475a;
    color: #f8f8f8;
    font-size: 16px;
    padding: 14px 12px;
    border-radius: 8px;
    border: none;
    box-sizing: border-box;
    resize: none;

    @media screen and (min-width: 1024px) {
      font-size: 20px;
    }
  }
`;

export const ContactInput = styled.input`
  background-color: #44475a;
  color: #f8f8f8;
  font-size: 16px;
  width: calc(50% - 6px);
  max-width: 600px;
  padding: 0 12px;
  height: 42px;
  border-radius: 8px;
  border: none;
  box-sizing: border-box;

  @media screen and (min-width: 1024px) {
    font-size: 20;

  }
`;

export const ContactButton = styled.button`
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
  background-color: #8be9fd;
  border-radius: 25px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  color: #44475a;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #c2c2c2;
  }

  @media screen and (min-width: 1024px) {
    width: 220px;
    font-size: 20px;
  }
`;
