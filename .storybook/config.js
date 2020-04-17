import React from 'react';
import 'normalize.css';
import { addDecorator } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { Wrapper } from '../src/components/app/app-styles';

const StorybookWrapper = (storyFn) => (
  <MemoryRouter>
    <Wrapper>
      {storyFn()}
    </Wrapper>
  </MemoryRouter>
);

addDecorator(StorybookWrapper);
