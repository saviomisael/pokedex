import { pokemonsActions, pokemonsReducer } from './pokemons-duck';
import { pokemonsMappedMock } from '../../mocks/pokemonsMock';

describe('pokemons duck', () => {
  const initialState = {
    pokemonsList: [],
  };

  it('should init pokemonsList with data', () => {
    const stateModified = pokemonsReducer(
      initialState,
      pokemonsActions.initPokemonsList([...pokemonsMappedMock]),
    );

    expect(stateModified.pokemonsList).toHaveLength(4);
  });

  it('should toggle isFavorite property of pokemon by id', () => {
    const pokemonId = '09c7c9e4-e32b-4f6a-9bfe-5b55c8e69d93';

    let stateModified = pokemonsReducer(
      { pokemonsList: [...pokemonsMappedMock] },
      pokemonsActions.toggleIsFavoriteByPokemonId(pokemonId),
    );

    expect(
      stateModified.pokemonsList.find((x) => x.id === pokemonId).isFavorite,
    ).toBeTruthy();

    stateModified = pokemonsReducer(
      stateModified,
      pokemonsActions.toggleIsFavoriteByPokemonId(pokemonId),
    );

    expect(
      stateModified.pokemonsList.find((x) => x.id === pokemonId).isFavorite,
    ).toBeFalsy();
  });
});