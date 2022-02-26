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
});
