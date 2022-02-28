import { screen } from '@testing-library/react';
import { renderWithBaseStyles } from '../../utils/tests-utils';
import { PokemonItem } from '.';
import { pokemonsMappedMock } from '../../mocks/pokemonsMock';

describe('<PokemonItem />', () => {
  it('should render favorite button when pokemon is favorite', () => {
    const mock = { ...pokemonsMappedMock[0], isFavorite: true };

    renderWithBaseStyles(
      <PokemonItem pokemon={mock} onFavoriteClick={() => {}} />,
    );

    expect(screen.getByTestId('buttonFavorite')).toHaveStyleRule(
      'opacity',
      '1',
    );
    expect(screen.getByTestId('buttonFavorite')).toHaveStyleRule(
      'visibility',
      'visible',
    );
  });
});
