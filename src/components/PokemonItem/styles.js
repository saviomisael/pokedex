import styled, { css } from 'styled-components';

export const ButtonFavorite = styled.button`
  place-self: end;
  cursor: pointer;
  transition: opacity 0.3s;

  ${({ isFavorite }) =>
    isFavorite
      ? css`
          opacity: 1;
          visibility: visible;
        `
      : css`
          opacity: 0;
          visibility: hidden;
        `}
`;

export const Pokemon = styled.article`
  font-size: 1.8rem;
  border: 0.1rem solid #171717;
  border-radius: 0.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-image: linear-gradient(
    135deg,
    #ca0d29,
    #ca0d29 30%,
    #f3f3f3 30%,
    #f3f3f3
  );

  &:hover ${ButtonFavorite} {
    opacity: 1;
    visibility: visible;
  }
`;

export const Image = styled.img`
  width: 10rem;
  border-radius: 50%;
`;

export const Content = styled.aside`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem 1rem;
  min-width: 22rem;
`;

export const Text = styled.p`
  ${({ align }) => css`
    text-align: ${align || 'left'};
  `}
`;

export const TypeContainer = styled.div``;

export const Bold = styled.strong``;
