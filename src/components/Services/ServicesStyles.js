import styled from 'styled-components';

export const ServicesSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 5%;
  overflow: hidden;

  @media screen and (min-width: 1024px) {
    height: 100vh;
  }

  @media screen and (min-width: 1360px) {
    padding: 20px 15%;
  }
`;

export const ServicesTitle = styled.h2`
  width: fit-content;
  font-size: 36px;
  margin-top: 0;

  @media screen and (min-width: 768px) {
    font-size: 40px;
  }

  strong {
    color: #8be9fd;
  }
`;

export const ServicesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 34px;
`;

export const ServicesCard = styled.div`
  display: flex;
  max-width: 420px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #44475a;
  border-radius: 16px;
  box-sizing: border-box;
  transition: all .5s;

  &:hover {
    scale: 1.1;
    border: solid 2px #8be9fd;
  }

  @media screen and (min-width: 768px) {
    padding: 28px;
  }

  svg {
    color: #8be9fd;
    height: 54px;
    width: 54px;

    @media screen and (min-width: 768px) {
      height: 58px;
      width: 58px;
    }
  }

  h3 {
    font-size: 24px;

    @media screen and (min-width: 768px) {
      font-size: 28px;
    }
  }

  p {
    margin: 0;
    padding: 0 10px;
    font-size: 16px;
    font-weight: 600;
    text-align: left;
    line-height: 1.5;

    @media screen and (min-width: 768px) {
      font-size: 20px;
    }
  }
  ul {
    max-width:364px;
    width: 100%;
    li {
      font-size: 16px;
      line-height: 1.5;
      font-weight: 400;
    }
  }
`;

export const ServicesCardButton = styled.button`
  width: 160px;
  height: 50px;
  background-color: #8be9fd;
  border-radius: 25px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  color: #44475a;

  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    width: 180px;
    font-size: 20px;
  }
`;
