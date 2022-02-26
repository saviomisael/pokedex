import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchPokemons } from '../../store/ducks/pokemons-duck';
import { PokemonsList } from '../PokemonsList';

export const Pokedex = () => {
  const dispatch = useDispatch();
  const {
    pokemons: { pokemonsList },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  return (
    <main>
      <PokemonsList pokemons={pokemonsList} />
    </main>
  );
};
