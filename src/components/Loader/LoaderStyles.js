import styled, { keyframes } from 'styled-components';

export const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(40,42,54, .8);
  z-index: 1000;
`;

export const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 10px solid #8be9fd; /* Light grey */
  border-top: 10px solid transparent; /* Black */
  border-radius: 50%;
  animation: ${spinner} 1s linear infinite;
`;
