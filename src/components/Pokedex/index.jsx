import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchPokemons } from '../../store/ducks/pokemons-duck';
import { PokemonsList } from '../PokemonsList';
import { PokedexBar } from './PokedexBar';
import * as Styled from './styles';

export const Pokedex = () => {
  const dispatch = useDispatch();
  const {
    pokemons: { pokemonsToShow },
  } = useSelector((state) => state);

  useEffect(() => {
    const fetchPokemonsPromise = dispatch(fetchPokemons());

    return () => {
      fetchPokemonsPromise.abort();
    };
  }, [dispatch]);

  return (
    <Styled.MainContent>
      <PokedexBar />
      <PokemonsList pokemons={pokemonsToShow} />
    </Styled.MainContent>
  );
};
