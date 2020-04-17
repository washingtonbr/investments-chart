import React from 'react';
import { addDecorator } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

const StorybookWrapper = (storyFn) => (
  <MemoryRouter>
    {storyFn()}
  </MemoryRouter>
);

addDecorator(StorybookWrapper);
