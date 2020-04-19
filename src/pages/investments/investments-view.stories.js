import React from 'react';
import InvestmentsView from './investments-view';
import {
  mockLabels,
  mockData,
  mockisFetching,
} from './investments-view.mock';

export default {
  title: 'Pages/Investments Chart',
};

export const standard = () => (
  <InvestmentsView
    labels={mockLabels}
    data={mockData}
    isFetching={mockisFetching}
  />
);

export const isFetching = () => (
  <InvestmentsView
    labels={mockLabels}
    data={mockData}
    isFetching={true}
  />
);

export const isEmpty = () => (
  <InvestmentsView
    labels={mockLabels}
    data={[]}
    isFetching={mockisFetching}
  />
);
