import styled from 'styled-components';

export const Navbar = styled.nav`
  height: ${(props) => props.height};
  overflow: hidden;
  padding: 20px 5%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  transition: all .5s;

  @media screen and (min-width: 768px) {
    flex-wrap: unset;
    position: ${(props) => props.position};
    width: 100%;
    background-color: #282a36;
    z-index: 1000;
  }

  @media screen and (min-width: 1360px) {
   padding: 20px 15%;
  }

  a {
      color: #f8f8f2;
      text-decoration: none;
      &:hover {
        color: #8be9fd;
        cursor: pointer;
      }
    }
`;

export const NavTitleContainer = styled.div`
  width: 50%;
`;

export const NavTitle = styled.span`
  font-size: 24px;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
  
  @media screen and (min-width: 1024px) {
    font-size: 32px;
  }
`;

export const NavButtonContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const NavButton = styled.button`
  width: fit-content;
  height: fit-content;
  margin: 0;
  background-color: transparent;
  border: none;
  color: #f8f8f8;
  
  svg {
    width: 36px;
    height: 36px;
  }

    &:hover {
    cursor: pointer;
  }
`;

export const NavLinks = styled.div`
  padding-top: 20px;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 20px;
  justify-content: flex-end;
  
  @media screen and (min-width: 768px) {
    gap: 24px;
    padding-top: unset;
    flex-direction: row;
  }
  
  @media screen and (min-width: 1024px) {
    gap: 28px;
  }

  a {
    font-size: 18px;
    @media screen and (min-width: 768px) {
      font-size: 22px;
    }

    @media screen and (min-width: 1024px) {
      font-size: 26px;
    }
  }
`;
