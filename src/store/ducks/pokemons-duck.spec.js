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
      {
        pokemonsList: [...pokemonsMappedMock],
        pokemonsToShow: [...pokemonsMappedMock],
      },
      pokemonsActions.toggleIsFavoriteByPokemonId(pokemonId),
    );

    expect(
      stateModified.pokemonsList.find((x) => x.id === pokemonId).isFavorite,
    ).toBeTruthy();
    expect(
      stateModified.pokemonsToShow.find((x) => x.id === pokemonId).isFavorite,
    ).toBeTruthy();

    stateModified = pokemonsReducer(
      stateModified,
      pokemonsActions.toggleIsFavoriteByPokemonId(pokemonId),
    );

    expect(
      stateModified.pokemonsList.find((x) => x.id === pokemonId).isFavorite,
    ).toBeFalsy();
    expect(
      stateModified.pokemonsToShow.find((x) => x.id === pokemonId).isFavorite,
    ).toBeFalsy();
  });

  it('should filter pokemonsToShow after toggling isFavorite when filterByFavorites is true', () => {
    const pokemonId = '09c7c9e4-e32b-4f6a-9bfe-5b55c8e69d93';

    let stateModified = pokemonsReducer(
      {
        pokemonsList: [...pokemonsMappedMock],
        pokemonsToShow: [...pokemonsMappedMock],
        filterByFavorites: true,
      },
      pokemonsActions.toggleIsFavoriteByPokemonId(pokemonId),
    );

    expect(stateModified.pokemonsToShow).toHaveLength(1);

    stateModified = pokemonsReducer(
      { ...stateModified },
      pokemonsActions.toggleIsFavoriteByPokemonId(pokemonId),
    );

    expect(stateModified.pokemonsToShow).toHaveLength(0);
  });

  it('should order pokemons by name in ascending order', () => {
    const stateModified = pokemonsReducer(
      {
        pokemonsList: [...pokemonsMappedMock].reverse(),
        pokemonsToShow: [...pokemonsMappedMock].reverse(),
      },
      pokemonsActions.orderByNameAsc(),
    );

    const namesOrdered = ['Bulbasaur', 'Ivysaur', 'Venusaur', 'Venusaur'];

    stateModified.pokemonsToShow.forEach((x, index) => {
      expect(x.name).toBe(namesOrdered[index]);
    });
  });

  it('should order pokemons by name in descending order', () => {
    const stateModified = pokemonsReducer(
      {
        pokemonsList: [...pokemonsMappedMock],
        pokemonsToShow: [...pokemonsMappedMock],
      },
      pokemonsActions.orderByNameDesc(),
    );

    const namesOrdered = ['Venusaur', 'Venusaur', 'Ivysaur', 'Bulbasaur'];

    stateModified.pokemonsToShow.forEach((x, index) => {
      expect(x.name).toBe(namesOrdered[index]);
    });
  });

  it('should order pokemons by national number in ascending order', () => {
    const stateModified = pokemonsReducer(
      {
        pokemonsList: [...pokemonsMappedMock].reverse(),
        pokemonsToShow: [...pokemonsMappedMock].reverse(),
      },
      pokemonsActions.orderByNationalNumberAsc(),
    );

    const nationalNumberOrdered = ['001', '002', '003', '003'];

    stateModified.pokemonsToShow.forEach((x, index) => {
      expect(x.nationalNumber).toBe(nationalNumberOrdered[index]);
    });
  });

  it('should order pokemons by national number in descending order', () => {
    const stateModified = pokemonsReducer(
      {
        pokemonsList: [...pokemonsMappedMock],
        pokemonsToShow: [...pokemonsMappedMock],
      },
      pokemonsActions.orderByNationalNumberDesc(),
    );

    const nationalNumberOrdered = ['003', '003', '002', '001'];

    stateModified.pokemonsToShow.forEach((x, index) => {
      expect(x.nationalNumber).toBe(nationalNumberOrdered[index]);
    });
  });

  it('should filter pokemons when isFavorite property is true', () => {
    const mock = [...pokemonsMappedMock].map((x, index) => {
      if (index % 2 === 0) {
        const newPokemon = { ...x, isFavorite: true };
        return newPokemon;
      }

      return x;
    });

    const stateModified = pokemonsReducer(
      { pokemonsList: mock, pokemonsToShow: [] },
      pokemonsActions.filterByFavoritesPokemons(),
    );

    expect(stateModified.pokemonsToShow).toHaveLength(2);

    stateModified.pokemonsToShow.forEach((x) => {
      expect(x.isFavorite).toBeTruthy();
    });
  });

  it('should search a pokemon by national number', () => {
    const stateModified = pokemonsReducer(
      {
        pokemonsList: [...pokemonsMappedMock],
        pokemonsToShow: [...pokemonsMappedMock],
      },
      pokemonsActions.searchPokemon('002'),
    );

    expect(stateModified.pokemonsToShow).toHaveLength(1);
  });

  it('should search a pokemon by name', () => {
    const stateModified = pokemonsReducer(
      {
        pokemonsList: [...pokemonsMappedMock],
        pokemonsToShow: [...pokemonsMappedMock],
      },
      pokemonsActions.searchPokemon('venu'),
    );

    expect(stateModified.pokemonsToShow).toHaveLength(2);
  });

  it('should search by name only favorite pokemons when filterByFavorites is true', () => {
    const mock = [...pokemonsMappedMock].map((x, index) => {
      if (index % 2 === 0) {
        const newPokemon = { ...x, isFavorite: true };
        return newPokemon;
      }

      return x;
    });

    const stateModified = pokemonsReducer(
      {
        pokemonsList: [...pokemonsMappedMock],
        pokemonsToShow: [...mock],
        filterByFavorites: true,
      },
      pokemonsActions.searchPokemon('bulb'),
    );

    expect(stateModified.pokemonsToShow).toHaveLength(1);

    stateModified.pokemonsToShow.forEach((x) => {
      expect(x.isFavorite).toBeTruthy();
    });
  });
});
