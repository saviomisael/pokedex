import PokeballImage from '../../assets/images/pokeball.png';
import * as Styled from './styles';

export const HeaderBox = () => {
  return (
    <Styled.Header>
      <Styled.Title>Pokédex</Styled.Title>
      <Styled.Image src={PokeballImage} alt="poké ball" />
    </Styled.Header>
  );
};
