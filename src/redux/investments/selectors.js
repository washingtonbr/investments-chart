export const getInvestmentsState = (state) => state.investments;

export const getInvestments = (state) => getInvestmentsState(state).items;

export const getPeriodSelected = (state) => getInvestmentsState(state).periodSelected;

export const isFetching = (state) => getInvestmentsState(state).isFetching;

export const getError = (state) => getInvestmentsState(state).error;
