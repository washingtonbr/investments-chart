import 'normalize.css';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addDecorator } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { Wrapper } from '../src/components/app/app-styles';
import { mockInitialState } from '../src/redux/store.mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const reduxStore = mockStore(mockInitialState);

const StorybookWrapper = (storyFn) => (
  <Provider store={reduxStore}>
    <MemoryRouter>
      <Wrapper>
        {storyFn()}
      </Wrapper>
    </MemoryRouter>
  </Provider>
);

addDecorator(StorybookWrapper);
