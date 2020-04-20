
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import { mockReduxState } from '../../redux/store.mock';
import RoutesContainer from './routes-container';
import InvestmentsPage from '../../pages/investments';

jest.mock('../../pages/investments', () => () => <></>);

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const reduxStore = mockStore(mockReduxState);

describe('RoutesContainer', () => {
  it('should renders InvestmentsPage component', () => {
    const wrapper = mount(
      <Provider store={reduxStore}>
        <MemoryRouter initialEntries={[ '/' ]}>
          <RoutesContainer />
        </MemoryRouter>
      </Provider>
    );

    expect(wrapper.find(InvestmentsPage).exists()).toBeTruthy();
  });
});
