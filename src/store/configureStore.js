import { configureStore } from '@reduxjs/toolkit';
import { pokemonsReducer } from './ducks/pokemons-duck';

export const store = configureStore({
  reducer: {
    pokemons: pokemonsReducer,
  },
});
