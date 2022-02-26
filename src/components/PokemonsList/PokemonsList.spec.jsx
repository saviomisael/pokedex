import { screen } from '@testing-library/react';
import { renderWithBaseStyles } from '../../utils/styles-utils';
import { PokemonsList } from '.';
import { pokemonsMappedMock } from '../../mocks/pokemonsMock';

describe('<PokemonsList />', () => {
  it('should render all pokemons passed by prop', () => {
    renderWithBaseStyles(<PokemonsList pokemons={[...pokemonsMappedMock]} />);

    expect(screen.getAllByRole('listitem')).toHaveLength(4);
  });

  it('should not render anyone listitem when pokemons prop is empty', () => {
    renderWithBaseStyles(<PokemonsList pokemons={[]} />);

    expect(screen.queryAllByRole('listitem')).toHaveLength(0);
  });
});
