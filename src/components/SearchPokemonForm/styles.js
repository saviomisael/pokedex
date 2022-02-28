import styled from 'styled-components';

export const Label = styled.label`
  font-weight: bold;
  font-size: 1.8rem;
`;

export const SearchInput = styled.input.attrs({ type: 'search' })`
  border: none;
  outline: none;
  padding: 1rem 2rem;
  min-width: 28rem;
  font-size: 1.6rem;

  &::placeholder {
    font-size: 1.3rem;
  }
`;
