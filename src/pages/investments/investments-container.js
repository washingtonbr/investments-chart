import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchInvestments } from '../../redux/investments/actions';
import { getInvestmentsFiltered, isFetching } from '../../redux/investments/selectors';
import InvestmentsView from './investments-view';

export default function InvestmentContainer() {
  const investmentsData = useSelector(getInvestmentsFiltered);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInvestments());
  }, [dispatch]);

  return (
    <InvestmentsView
      labels={investmentsData.map((item) => item[0])}
      data={investmentsData.map((item) => item[1])}
      isFetching={useSelector(isFetching)}
    />
  );
}
