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

    scrollbar-width: thin;
    scrollbar-color: #171717 #CA0D29;
  }

  *::-webkit-scrollbar {
    width: 1rem;
  }

  *::-webkit-scrollbar-track {
    background: #CA0D29;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #171717;
    height: 2rem;
    border-radius: 1rem;
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
