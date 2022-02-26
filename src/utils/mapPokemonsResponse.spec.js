import { pokemonsMock } from '../mocks/pokemonsMock';
import { mapPokemonsResponse } from './mapPokemonsResponse';

describe('mapPokemonsResponse', () => {
  it('should map pokemons response data', () => {
    const mock = [...pokemonsMock];

    const result = mapPokemonsResponse(mock);

    expect(result).toHaveLength(4);

    result.forEach((x, index) => {
      expect(x.nationalNumber).toBe(mock[index].national_number);

      expect(x.pokemonImg).toBe(mock[index].sprites.large);

      expect(x.name).toBe(mock[index].name);

      expect(x.type).toBe(mock[index].type);

      expect(x.id).toBeTruthy();

      expect(x.isFavorite).toBeFalsy();
    });
  });
});
