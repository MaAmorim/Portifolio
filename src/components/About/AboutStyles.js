import styled from 'styled-components';

export const AboutSection = styled.section`
  padding: 20px 5%;
  background-color: #44475a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media screen and (min-width: 1024px) {
    height: 100vh;
    flex-direction: row-reverse;
    gap: 60px;
    align-items: center;
  }

  @media screen and (min-width: 1360px) {
   padding: 20px 15%;
   gap: 100px;
  }
`;

export const AboutTitle = styled.h2`
  font-size: 36px;
  margin: 0;

  @media screen and (min-width: 1024px) {
    font-size: 40px;
  }

  strong {
    color: #8be9fd;
  }
`;

export const AboutSubtitle = styled.span`
  font-size: 28px;
  margin-top: 0;

  @media screen and (min-width: 1024px) {
    font-size: 40px;
  }
`;

export const AboutDescription = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-top: 18px;
  font-weight: 200;
`;

export const AboutButton = styled.button`
  width: 160px;
  height: 50px;
  background-color: #8be9fd;
  border-radius: 25px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  color: #282a36;

  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    width: 180px;
    font-size: 20px;
  }
`;

export const AboutProfilePicture = styled.div`
  margin-top: 34px;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 768px) {
    margin-top: unset;

  }
  
  @media screen and (min-width: 1490px) {
    img {
      height: 600px;
      width: 600px;
    }
  }
`;
