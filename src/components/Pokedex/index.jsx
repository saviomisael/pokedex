import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchPokemons } from '../../store/ducks/pokemons-duck';
import { FilterInput } from '../FilterInput';
import { PokemonsList } from '../PokemonsList';
import { SearchPokemonForm } from '../SearchPokemonForm';
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
      <FilterInput />
      <SearchPokemonForm />
      <PokemonsList pokemons={pokemonsToShow} />
    </Styled.MainContent>
  );
};
