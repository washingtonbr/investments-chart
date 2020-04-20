
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { mockReduxState } from '../../redux/store.mock';
import AppView from './app-view';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const reduxStore = mockStore(mockReduxState);

describe('AppView', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={reduxStore}>
          <MemoryRouter>
            <AppView />
          </MemoryRouter>
        </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
