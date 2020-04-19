import React from 'react';
import InvestmentsView from '../../components/investments-chart';
import { mockLabels, mockData } from './investments-view.mock';

export default {
  title: 'Pages/Investments Chart',
};

export const standard = () => (
  <InvestmentsView
    labels={mockLabels}
    data={mockData}
  />
);
