import reducer from './reducer';
import * as types from './action-types';
import {
  mockInitialState,
  mockInvestments,
  mockError,
  mockPeriodSelected,
} from './investments.mock';

describe('investments reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(mockInitialState, {})).toEqual(mockInitialState);
  });

  it('should handle TOGGLE_FETCHING_INVESTMENTS', () => {
    const startAction = {
      type: types.TOGGLE_FETCHING_INVESTMENTS
    };
    const expectedResults = {
      ...mockInitialState,
      isFetching: true,
    };
    expect(reducer(mockInitialState, startAction)).toEqual(expectedResults);
  });

  it('should handle FETCH_INVESTMENTS_SUCCESS', () => {
    const startAction = {
      type: types.FETCH_INVESTMENTS_SUCCESS,
      payload: {
        items: mockInvestments,
      },
    };
    const expectedResults = {
      ...mockInitialState,
      items: mockInvestments,
    };
    expect(reducer(mockInitialState, startAction)).toEqual(expectedResults);
  });

  it('should handle FETCH_INVESTMENTS_FAILURE', () => {
    const startAction = {
      type: types.FETCH_INVESTMENTS_FAILURE,
      payload: {
        error: mockError,
      },
    };
    const expectedResults = {
      ...mockInitialState,
      error: mockError,
    };
    expect(reducer(mockInitialState, startAction)).toEqual(expectedResults);
  });

  it('should handle SET_PERIOD_SELECTED', () => {
    const { label, startDate, endDate } = mockPeriodSelected;
    const startAction = {
      type: types.SET_PERIOD_SELECTED,
      payload: {
        label,
        startDate,
        endDate,
      },
    };
    const expectedResults = {
      ...mockInitialState,
      periodSelected: mockPeriodSelected,
    };
    expect(reducer(mockInitialState, startAction)).toEqual(expectedResults);
  });
});
