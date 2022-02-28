import { useDispatch } from 'react-redux';
import { pokemonsActions } from '../../store/ducks/pokemons-duck';
import * as Styled from './styles';

export const SearchPokemonForm = () => {
  const dispatch = useDispatch();

  const handleTermChange = ({ target: { value } }) => {
    dispatch(pokemonsActions.searchPokemon(value));
  };

  return (
    <Styled.Label htmlFor="term">
      Busca:
      <Styled.SearchInput
        onChange={handleTermChange}
        id="term"
        placeholder="Digite o nome ou registro nacional"
      />
    </Styled.Label>
  );
};
