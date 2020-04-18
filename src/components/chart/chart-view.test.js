import React from 'react';
import renderer from 'react-test-renderer';
import Chart from './chart-view';
import {
  mockChartType,
  mockChartData,
  mockChartOptions,
} from './chart-view.mock';

describe('Chart', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Chart
          type={mockChartType}
          data={mockChartData}
          options={mockChartOptions}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
