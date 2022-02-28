import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { listPokemons } from '../../services/pokemonsService';
import {
  sortObjectsByNumberAsc,
  sortObjectsByNumberDesc,
  sortObjectsByStringAsc,
  sortObjectsByStringDesc,
} from '../../utils/sortObjects';

const pokemonsInitialState = {
  pokemonsList: [],
  pokemonsToShow: [],
  filterByFavorites: false,
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
      const toggleIsFavoriteCallback = ({ ...pokemon }) => {
        if (pokemon.id === action.payload) {
          pokemon.isFavorite = !pokemon.isFavorite;
        }

        return pokemon;
      };

      state.pokemonsList = state.pokemonsList.map(toggleIsFavoriteCallback);

      let newPokemonsToShow = state.pokemonsToShow.map(
        toggleIsFavoriteCallback,
      );

      if (state.filterByFavorites) {
        newPokemonsToShow = newPokemonsToShow.filter((x) => x.isFavorite);
      }

      state.pokemonsToShow = newPokemonsToShow;
    },
    orderByNameAsc(state, action) {
      state.pokemonsToShow = sortObjectsByStringAsc(state.pokemonsList)('name');
      state.filterByFavorites = false;
    },
    orderByNameDesc(state, action) {
      state.pokemonsToShow = sortObjectsByStringDesc(state.pokemonsList)(
        'name',
      );
      state.filterByFavorites = false;
    },
    orderByNationalNumberAsc(state, action) {
      state.pokemonsToShow = sortObjectsByNumberAsc(state.pokemonsList)(
        'nationalNumber',
      );
      state.filterByFavorites = false;
    },
    orderByNationalNumberDesc(state, action) {
      state.pokemonsToShow = sortObjectsByNumberDesc(state.pokemonsList)(
        'nationalNumber',
      );
      state.filterByFavorites = false;
    },
    filterByFavoritesPokemons(state, action) {
      state.pokemonsToShow = state.pokemonsList.filter((x) => x.isFavorite);
      state.filterByFavorites = true;
    },
  },
});

export const { actions: pokemonsActions, reducer: pokemonsReducer } =
  pokemonsSlice;
