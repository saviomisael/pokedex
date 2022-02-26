import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import * as Styled from './styles';

export const PokemonItem = ({ pokemon, onFavoriteClick }) => {
  const buttonFavoriteIcon = pokemon.isFavorite ? faStarSolid : faStarRegular;
  const pokemonTypeLabel = pokemon.type.length > 1 ? 'Tipos:' : 'Tipo:';

  const handleFavoriteClick = () => {
    onFavoriteClick(pokemon.id);
  };

  return (
    <Styled.Pokemon>
      <Styled.Image src={pokemon.pokemonImg} alt={pokemon.name} />

      <Styled.Content>
        <Styled.Text>{pokemon.name}</Styled.Text>
        <Styled.Text align="right">{pokemon.nationalNumber}</Styled.Text>
        <Styled.TypeContainer>
          <Styled.Bold>{pokemonTypeLabel}</Styled.Bold>
          {pokemon.type.map((x) => (
            <Styled.Text key={x}>{x}</Styled.Text>
          ))}
        </Styled.TypeContainer>
        <Styled.ButtonFavorite
          onClick={handleFavoriteClick}
          type="button"
          isFavorite={pokemon.isFavorite}
          data-testid="buttonFavorite"
        >
          <FontAwesomeIcon icon={buttonFavoriteIcon} color="#ca0d29" />
        </Styled.ButtonFavorite>
      </Styled.Content>
    </Styled.Pokemon>
  );
};

PokemonItem.propTypes = {
  pokemon: PropTypes.shape({
    nationalNumber: PropTypes.string.isRequired,
    pokemonImg: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.arrayOf(PropTypes.string).isRequired,
    id: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  }).isRequired,
  onFavoriteClick: PropTypes.func.isRequired,
};
