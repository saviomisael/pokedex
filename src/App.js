import { Pokedex } from './components/Pokedex';
import { BaseStyles } from './styles/base';
import { StoreProvider } from './store/StoreProvider';
import { HeaderBox } from './components/HeaderBox';

const App = () => {
  return (
    <StoreProvider>
      <BaseStyles />
      <HeaderBox />
      <Pokedex />
    </StoreProvider>
  );
};

export default App;
