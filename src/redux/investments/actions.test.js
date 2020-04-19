import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as types from './action-types';
import * as actions from './actions';
import { mockReduxState } from '../store.mock';
import {
  mockInvestments,
  mockError,
  mockPeriodSelected,
} from './investments.mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('investments actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  test('toggleFetchingInvestments should create TOGGLE_FETCHING_INVESTMENTS action', () => {
    expect(actions.toggleFetchingInvestments()).toEqual({
      type: types.TOGGLE_FETCHING_INVESTMENTS,
    });
  });

  test('fetchInvestmentsSuccess should create FETCH_INVESTMENTS_SUCCESS action', () => {
    expect(actions.fetchInvestmentsSuccess(mockInvestments)).toEqual({
      type: types.FETCH_INVESTMENTS_SUCCESS,
      payload: {
        items: mockInvestments,
      },
    });
  });

  test('fetchInvestmentsFailure should create FETCH_INVESTMENTS_FAILURE action', () => {
    expect(actions.fetchInvestmentsFailure(mockError)).toEqual({
      type: types.FETCH_INVESTMENTS_FAILURE,
      payload: {
        error: mockError,
      },
    });
  });

  test('creates FETCH_INVESTMENTS_SUCCESS when fetching investments has been done', () => {
    const endpoint = 'https://gist.githubusercontent.com/AgtLucas/a67c345e15c2eb3d4668c9b7e330ac44/raw/1de2450cbe69fde065bca9e498aaaaafcca61257/mock-data.js';
    fetchMock.getOnce(endpoint, {
      body: mockInvestments,
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: types.TOGGLE_FETCHING_INVESTMENTS },
      {
        type: types.FETCH_INVESTMENTS_SUCCESS,
        payload: {
          items: mockInvestments,
        },
      },
    ];
    const store = mockStore(mockReduxState);

    return store.dispatch(actions.fetchInvestments())
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });

  test('setPeriodSelected should create SET_PERIOD_SELECTED action', () => {
    const { label, startDate, endDate } = mockPeriodSelected;
    expect(actions.setPeriodSelected(label, startDate, endDate)).toEqual({
      type: types.SET_PERIOD_SELECTED,
      payload: {
        label,
        startDate,
        endDate,
      },
    });
  });
});
