import styled from 'styled-components';

export const ProjectsSection = styled.section`
  padding: 20px 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #44475a;

  @media screen and (min-width: 1024px) {
    height: 100vh;
  }

  @media screen and (min-width: 1360px) {
    padding: 20px 15%;
  }
`;

export const ProjectsTitle = styled.h2`
  font-size: 36px;
  margin-top: 0;

  @media screen and (min-width: 1024px) {
    font-size: 40px;
  }

  strong {
    color: #8be9fd;
  }
`;

export const ProjectsGallery = styled.div`
  width: fit-content;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 30px;

  img {
    border-radius: 16px;

    @media screen and (min-width: 1360px) {
      width: 510px;
      height: 320px;
    }
  }
`;
export const ProjectsDownloadButton = styled.a`
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
