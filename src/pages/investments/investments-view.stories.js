import React from 'react';
import InvestmentsChart from '../../components/investments-chart';
import { mockLabels, mockData } from './investments-view.mock';

export default {
  title: 'Pages/Investments Chart',
};

export const standard = () => (
  <InvestmentsChart
    labels={mockLabels}
    data={mockData}
  />
);
