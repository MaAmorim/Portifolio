import styled from 'styled-components';

export const FooterSection = styled.footer`
  padding: 20px 5%;
  display: flex;
  justify-content: space-between;
  background-color: #44475a;
  align-items: center;

  @media screen and (min-width: 1360px) {
    padding: 20px 15%;
  }
`;

export const FooterText = styled.footer`
  font-size: 16px;
  font-weight: 200;

  @media screen and (min-width: 1024px) {
   font-size: 20px;
  }
`;

export const FooterButton = styled.footer`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #8be9fd;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  color: #282a36;
  
  &:hover {
    cursor: pointer;
  }
  
  svg {
    width: 18px;
    height: 18px;
  }
`;
