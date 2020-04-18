import React from 'react';
import renderer from 'react-test-renderer';
import InvestmentsChart from './investments-view';
import { mockLabels, mockData } from './investments-view.mock';

describe('InvestmentsChart', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <InvestmentsChart
          labels={mockLabels}
          data={mockData}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
