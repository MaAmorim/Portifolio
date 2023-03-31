import styled, { keyframes } from 'styled-components';

export const HeroSection = styled.section`
  padding: 20px 5%;
  display: flex;
  flex-direction: column;
  overflow-X: hidden;


  @media screen and (min-width: 1024px) {
    height: 100vh;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (min-width: 1360px) {
    padding: 20px 15%;
    gap: 60px;
  }
  @media screen and (min-width: 1920px) {
    justify-content: center;
    gap: 120px;
  }
`;

export const HeroPresentation = styled.div`
  max-width: 640px;
  h1 {
    font-size: 40px;
    line-height: 1.2;
    margin: 0;

    @media screen and (min-width: 768px) {
      font-size: 44px;
    }

  }
  span, strong {
    font-size: 24px;
    line-height: 1.2;
    font-weight: 600;
    
    @media screen and (min-width: 768px) {
      font-size: 28px;
    }
  }

  strong {
    color: #8be9fd;
  }
`;

export const HeroDescription = styled.p`
  font-size: 18px;
  line-height: 1.2;
  margin-top: 18px;
  font-weight: 200;
`;

export const HeroSocialMedia = styled.div`
  margin: 24px 0;
  display: flex;
  gap: 20px;

  a {
    background-color: transparent;
    border: none;
    transition: all .5s;

    &:hover {
      svg {
        color: #8be9fd;
      }
    }

    svg {
      height: 30px;
      width: 30px;
      color: #5A8999;
      transition: all .5s;


      @media screen and (min-width: 768px) {
        width: 34px;
        height: 34px;
      }
    }
  }
`;

export const HeroDownloadButton = styled.a`
  width: 180px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #8be9fd;
  border-radius: 25px;
  border: none;
  font-size: 18px;
  font-weight: 600;
  color: #282a36;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;

export const floatImage = keyframes`
  0% {
    transform: translateY(0);    
  }
  50% {
    transform: translateY(-38px);      
  }
  100% {
    transform: translateY(0);      
  }
`;

export const HeroProfilePicture = styled.div`
  margin-top: 34px;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 768px) {
    margin-top: unset;

  }
  @media screen and (min-width: 1024px) {
    animation: ${floatImage} 2.5s ease-in-out infinite;
  }
  @media screen and (min-width: 1490px) {
    img {
      height: 600px;
      width: 600px;
    }
  }
`;
