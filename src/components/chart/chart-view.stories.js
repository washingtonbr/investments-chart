import React from 'react';
import Chart from './chart-view';
import {
  mockChartType,
  mockChartData,
  mockChartOptions,
} from './chart-view.mock';

export default {
  title: 'Components/Chart',
};

export const standard = () => (
  <Chart
    type={mockChartType}
    data={mockChartData}
    options={mockChartOptions}
  />
);
