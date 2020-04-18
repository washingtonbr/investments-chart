import React from 'react';
import DataFilter from '../../components/data-filter';
import PeriodInfo from '../../components/period-info';
import InvestmentsChart from '../../components/investments-chart';
import { Container, FilterRow } from './investments-styles';

export default function InvestmentView({
  labels,
  data,
}) {
  return (
    <Container>
      <FilterRow>
        <DataFilter />
      </FilterRow>

      <PeriodInfo />

      <InvestmentsChart
        labels={labels}
        data={data}
      />
    </Container>
  );
}
