import { Pokedex } from './components/Pokedex';
import { BaseStyles } from './styles/base';
import { StoreProvider } from './store/StoreProvider';

const App = () => {
  return (
    <StoreProvider>
      <BaseStyles />
      <Pokedex />
    </StoreProvider>
  );
};

export default App;
