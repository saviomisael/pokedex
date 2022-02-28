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
    searchPokemon(state, action) {
      const filterByName = (term) => (pokemon) =>
        pokemon.name.toLowerCase().includes(term);

      const filterByNationalNumber = (term) => (pokemon) =>
        pokemon.nationalNumber.startsWith(term);

      const isName = isNaN(Number(action.payload));

      const isNationalNumberValid =
        Number(action.payload) >= 0 && Number(action.payload) <= 807;

      const arrayToFilter = state.filterByFavorites
        ? 'pokemonsToShow'
        : 'pokemonsList';

      if (action.payload === '' && !state.filterByFavorites)
        state.pokemonsToShow = state.pokemonsList;

      if (action.payload === '' && state.filterByFavorites)
        state.pokemonsToShow = state.pokemonsList.filter((x) => x.isFavorite);

      if (isName && action.payload) {
        state.pokemonsToShow = state[arrayToFilter].filter((x) =>
          filterByName(action.payload)(x),
        );
      }

      if (isNationalNumberValid) {
        state.pokemonsToShow = state[arrayToFilter].filter((x) =>
          filterByNationalNumber(action.payload)(x),
        );
      }
    },
  },
});

export const { actions: pokemonsActions, reducer: pokemonsReducer } =
  pokemonsSlice;
