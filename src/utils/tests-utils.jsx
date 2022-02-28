import { render } from '@testing-library/react';
import { StoreProvider } from '../store/StoreProvider';
import { BaseStyles } from '../styles/base';

export const renderWithBaseStyles = (component) =>
  render(
    <>
      <BaseStyles />
      {component}
    </>,
  );

export const renderWithWrappers = (component) => {
  const componentWithReduxWrapper = <StoreProvider>{component}</StoreProvider>;

  return renderWithBaseStyles(componentWithReduxWrapper);
};
