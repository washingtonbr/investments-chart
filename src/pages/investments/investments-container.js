import React from 'react';
import InvestmentsView from './investments-view';

export default function InvestmentContainer() {
  const labels = ['10 JUN 2017', '', '', '', '', '', '', '', '', '', '15 ABR 2019'];
  const data = [900, 1200, 2100, 3800, 2900, 5600, 6600, 7400, 7200, 8000, 9400];

  return (
    <InvestmentsView
      labels={labels}
      data={data}
    />
  );
}
