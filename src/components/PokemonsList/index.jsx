import PropTypes from 'prop-types';
import * as Styled from './styles';
import { PokemonItem } from '../PokemonItem';
import { useDispatch } from 'react-redux';
import { pokemonsActions } from '../../store/ducks/pokemons-duck';

export const PokemonsList = ({ pokemons }) => {
  const dispatch = useDispatch();

  const handleFavoriteClick = (pokemonId) => {
    dispatch(pokemonsActions.toggleIsFavoriteByPokemonId(pokemonId));
  };

  const content = pokemons.map((x) => (
    <Styled.ListItem key={x.id}>
      <PokemonItem pokemon={x} onFavoriteClick={handleFavoriteClick} />
    </Styled.ListItem>
  ));

  return <Styled.List>{content}</Styled.List>;
};

PokemonsList.propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      nationalNumber: PropTypes.string.isRequired,
      pokemonImg: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.arrayOf(PropTypes.string).isRequired,
      id: PropTypes.string.isRequired,
      isFavorite: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};
