import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { listPokemons } from '../../services/pokemonsService';
import {
  sortObjectsByStringAsc,
  sortObjectsByStringDesc,
} from '../../utils/sortObjects';

const pokemonsInitialState = {
  pokemonsList: [],
  pokemonsToShow: [],
};

export const fetchPokemons = createAsyncThunk(
  'pokemons/fetchPokemons',
  async (_, thunkApi) => {
    const data = await listPokemons();

    thunkApi.dispatch(pokemonsActions.initPokemonsList(data));
  },
);

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState: pokemonsInitialState,
  reducers: {
    initPokemonsList(state, action) {
      state.pokemonsList = action.payload;
      state.pokemonsToShow = action.payload;
    },
    toggleIsFavoriteByPokemonId(state, action) {
      state.pokemonsList = state.pokemonsList.map((x) => {
        if (x.id === action.payload) {
          x.isFavorite = !x.isFavorite;
        }

        return x;
      });
    },
    orderByNameAsc(state, action) {
      state.pokemonsToShow = sortObjectsByStringAsc(state.pokemonsList)('name');
    },
    orderByNameDesc(state, action) {
      state.pokemonsToShow = sortObjectsByStringDesc(state.pokemonsList)(
        'name',
      );
    },
    orderByNationalNumberAsc(state, action) {
      state.pokemonsToShow = state.pokemonsList.sort(
        (pokemon1, pokemon2) =>
          Number(pokemon1.nationalNumber) - Number(pokemon2.nationalNumber),
      );
    },
    orderByNationalNumberDesc(state, action) {
      state.pokemonsToShow = state.pokemonsList.sort(
        (pokemon1, pokemon2) =>
          Number(pokemon2.nationalNumber) - Number(pokemon1.nationalNumber),
      );
    },
    filterByFavoritesPokemons(state, action) {
      state.pokemonsToShow = state.pokemonsList.filter((x) => x.isFavorite);
    },
  },
});

export const { actions: pokemonsActions, reducer: pokemonsReducer } =
  pokemonsSlice;
