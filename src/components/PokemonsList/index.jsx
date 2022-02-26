import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import * as Styled from './styles';

export const PokemonsList = ({ pokemons }) => {
  const content = pokemons.map((x) => (
    <Styled.ListItem key={x.id}>
      <Styled.PokemonItem>
        <Styled.PokemonImage src={x.pokemonImg} alt={x.name} />

        <Styled.PokemonContent>
          <Styled.Text>{x.name}</Styled.Text>
          <Styled.Text align="right">{x.nationalNumber}</Styled.Text>
          <Styled.TypeContainer>
            <Styled.Bold>Tipos:</Styled.Bold>
            {x.type.map((x) => (
              <Styled.Text key={x}>{x}</Styled.Text>
            ))}
          </Styled.TypeContainer>
          <Styled.ButtonFavorite type="button">
            <FontAwesomeIcon
              icon={x.isFavorite ? faStarSolid : faStarRegular}
              color="#ca0d29"
            />
          </Styled.ButtonFavorite>
        </Styled.PokemonContent>
      </Styled.PokemonItem>
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
