import { FilterInput } from '../../FilterInput';
import { SearchPokemonForm } from '../../SearchPokemonForm';
import * as Styled from './styles';

export const PokedexBar = () => {
  return (
    <Styled.Wrapper>
      <FilterInput />
      <SearchPokemonForm />
    </Styled.Wrapper>
  );
};
