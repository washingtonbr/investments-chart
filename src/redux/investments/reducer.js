import {
  TOGGLE_FETCHING_INVESTMENTS,
  FETCH_INVESTMENTS_SUCCESS,
  FETCH_INVESTMENTS_FAILURE,
  SET_PERIOD_SELECTED,
} from './action-types';

const initialState = {
  isFetching: false,
  error: {},
  periodSelected: {
    startDate: null,
    endDate: null,
  },
  items: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_FETCHING_INVESTMENTS:
      return {
        ...state,
        isFetching: !state.isFetching,
      };

    case FETCH_INVESTMENTS_SUCCESS:
      const { items } = action.payload;
      return {
        ...state,
        items,
      };

    case FETCH_INVESTMENTS_FAILURE:
      const { error } = action.payload;
      return {
        ...state,
        error,
      };

      case SET_PERIOD_SELECTED:
        const { startDate, endDate } = action.payload;
        return {
          ...state,
          periodSelected: {
            startDate,
            endDate,
          },
        };

    default:
      return state;
  }
}
