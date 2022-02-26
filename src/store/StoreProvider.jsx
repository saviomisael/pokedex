import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { store } from './configureStore';

export const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
