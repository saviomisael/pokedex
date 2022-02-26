import axios from 'axios';
import { mapPokemonsResponse } from '../utils/mapPokemonsResponse';

export const listPokemons = async () => {
  const responseData = await axios.get(
    'https://unpkg.com/pokemons@1.1.0/pokemons.json',
  );

  return mapPokemonsResponse(responseData.data.results);
};
