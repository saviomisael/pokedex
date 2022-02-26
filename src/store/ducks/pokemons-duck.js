import { createSlice } from '@reduxjs/toolkit';

const pokemonsInitialState = {
  pokemonsList: [],
};

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState: pokemonsInitialState,
  reducers: {
    initPokemonsList(state, action) {
      state.pokemonsList = action.payload;
    },
    toggleIsFavoriteByPokemonId(state, action) {
      state.pokemonsList = state.pokemonsList.map((x) => {
        if (x.id === action.payload) {
          x.isFavorite = !x.isFavorite;
        }

        return x;
      });
    },
  },
});

export const { actions: pokemonsActions, reducer: pokemonsReducer } =
  pokemonsSlice;
