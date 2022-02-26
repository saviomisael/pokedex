import { createGlobalStyle } from 'styled-components';
import { normalize } from './normalize';

export const BaseStyles = createGlobalStyle`
  ${normalize}

  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: inherit;
  }
  html,
  body {
    font-size: 62.5%;
    font-family: 'Montserrat', sans-serif;
  }
  
  button {
    background: transparent;
    border: none;
  }
`;
