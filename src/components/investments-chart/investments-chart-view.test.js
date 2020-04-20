import React from 'react';
import renderer from 'react-test-renderer';
import InvestmentsChart from './investments-chart-view';
import {
  mockLabels,
  mockData,
} from './investments-chart-view.mock';

jest.mock('../../utils/date');

describe('InvestmentsChartView', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <InvestmentsChart
          labels={mockLabels}
          data={mockData}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
