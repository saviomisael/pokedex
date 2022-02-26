import styled, { css } from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 4rem;
  padding: 1rem;
`;

export const ListItem = styled.li``;

export const PokemonItem = styled.article`
  font-size: 1.8rem;
  border: 0.1rem solid #171717;
  border-radius: 0.6rem;
  max-width: 68rem;
  margin: 0 auto;
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
`;

export const PokemonImage = styled.img`
  width: 10rem;
  border-radius: 50%;
`;

export const PokemonContent = styled.aside`
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

export const ButtonFavorite = styled.button`
  place-self: end;
`;
