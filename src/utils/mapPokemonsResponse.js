import { v4 } from 'uuid';

const mapSinglePokemonResponse = ({
  national_number: nationalNumber,
  sprites: { large: pokemonImg },
  name,
  type,
}) => ({
  nationalNumber,
  pokemonImg,
  name,
  type,
  id: v4(),
  isFavorite: false,
});

export const mapPokemonsResponse = (responseData) => {
  return responseData.map((x) => mapSinglePokemonResponse(x));
};
