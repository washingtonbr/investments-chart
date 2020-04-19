import { date } from '../../utils/date';

export const getInvestmentsState = (state) => state.investments;

export const getInvestments = (state) => getInvestmentsState(state).items;

export const getPeriodSelected = (state) => getInvestmentsState(state).periodSelected;

export const getInvestmentsFiltered = (state) => {
  const { startDate, endDate } = getPeriodSelected(state);
  const investments = getInvestments(state);
  if (!startDate && !endDate)
    return investments;

  return investments
    .filter((investment) => {
      const [timestamp] = investment;
      return date(timestamp).isSameOrAfter(startDate) && 
        date(timestamp).isSameOrBefore(endDate);
    });
};

export const isFetching = (state) => getInvestmentsState(state).isFetching;

export const getError = (state) => getInvestmentsState(state).error;
