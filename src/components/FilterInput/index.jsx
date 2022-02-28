import { useDispatch } from 'react-redux';
import { pokemonsActions } from '../../store/ducks/pokemons-duck';
import * as Styled from './styles';

export const FilterInput = () => {
  const dispatch = useDispatch();

  const handleFilterChange = ({ target: { value } }) => {
    if (!value) return;

    const actionsBinding = {
      'name-asc': 'orderByNameAsc',
      'name-desc': 'orderByNameDesc',
      'national-asc': 'orderByNationalNumberAsc',
      'national-desc': 'orderByNationalNumberDesc',
      favorite: 'filterByFavoritesPokemons',
    };

    const currentAction = actionsBinding[value];

    dispatch(pokemonsActions[currentAction]());
  };

  return (
    <Styled.Label>
      Ordenar por:
      <Styled.Select onChange={handleFilterChange}>
        <Styled.Filter value="">Nenhum</Styled.Filter>
        <Styled.Filter value="name-asc">Nome Ascendente</Styled.Filter>
        <Styled.Filter value="name-desc">Nome Descendente</Styled.Filter>
        <Styled.Filter value="national-asc">
          Registro Nacional Ascendente
        </Styled.Filter>
        <Styled.Filter value="national-desc">
          Registro Nacional Descendente
        </Styled.Filter>
        <Styled.Filter value="favorite">Favorito</Styled.Filter>
      </Styled.Select>
    </Styled.Label>
  );
};
