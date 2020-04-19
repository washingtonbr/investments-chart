import React from 'react';
import DataFilter from '../../components/data-filter';
import PeriodInfo from '../../components/period-info';
import InvestmentsChart from '../../components/investments-chart';
import { Container, FilterRow } from './investments-view.styles';

export default function InvestmentsView({
  labels,
  data,
  isFetching,
}) {
  return (
    <Container>
      <FilterRow>
        <DataFilter />
      </FilterRow>

      <PeriodInfo />

      {isFetching ? 'Carregando...' :
        <InvestmentsChart
          labels={labels}
          data={data}
        />}
    </Container>
  );
}
