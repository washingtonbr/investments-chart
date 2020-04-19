import {
  TOGGLE_FETCHING_INVESTMENTS,
  FETCH_INVESTMENTS_SUCCESS,
  FETCH_INVESTMENTS_FAILURE,
  SET_PERIOD_SELECTED,
} from './action-types';

export const toggleFetchingInvestments = () => ({
  type: TOGGLE_FETCHING_INVESTMENTS,
});

export const fetchInvestmentsSuccess = (items) => ({
  type: FETCH_INVESTMENTS_SUCCESS,
  payload: {
    items,
  },
});

export const fetchInvestmentsFailure = (error) => ({
  type: FETCH_INVESTMENTS_FAILURE,
  payload: {
    error,
  },
});

export const fetchInvestments = () => (dispatch) => {
  const endpoint = 'https://gist.githubusercontent.com/AgtLucas/a67c345e15c2eb3d4668c9b7e330ac44/raw/1de2450cbe69fde065bca9e498aaaaafcca61257/mock-data.js';
  dispatch(toggleFetchingInvestments());

  return fetch(endpoint)
    .then((res) => res.json())
    .then((body) => dispatch(fetchInvestmentsSuccess(body)))
    .catch((error) => dispatch(fetchInvestmentsFailure(error)));
};

export const setPeriodSelected = (startDate, endDate) => ({
  type: SET_PERIOD_SELECTED,
  payload: {
    startDate,
    endDate,
  },
});
