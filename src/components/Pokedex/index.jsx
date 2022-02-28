import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchPokemons } from '../../store/ducks/pokemons-duck';
import { FilterInput } from '../FilterInput';
import { PokemonsList } from '../PokemonsList';
import * as Styled from './styles';

export const Pokedex = () => {
  const dispatch = useDispatch();
  const {
    pokemons: { pokemonsToShow },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  return (
    <Styled.MainContent>
      <FilterInput />
      <PokemonsList pokemons={pokemonsToShow} />
    </Styled.MainContent>
  );
};
