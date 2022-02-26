import { render } from '@testing-library/react';
import { BaseStyles } from '../styles/base';

export const renderWithBaseStyles = (component) =>
  render(
    <>
      <BaseStyles />
      {component}
    </>,
  );
