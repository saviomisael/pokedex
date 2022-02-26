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
  },
});

export const { actions: pokemonsActions, reducer: pokemonsReducer } =
  pokemonsSlice;
