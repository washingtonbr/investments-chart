import React from 'react';
import renderer from 'react-test-renderer';
import InvestmentsView from './investments-view';
import { mockLabels, mockData } from './investments-view.mock';

jest.mock('../../utils/date');

describe('InvestmentsView', () => {
  xit('renders correctly', () => {
    const tree = renderer
      .create(
        <InvestmentsView
          labels={mockLabels}
          data={mockData}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
