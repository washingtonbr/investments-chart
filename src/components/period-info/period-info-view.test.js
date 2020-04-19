import React from 'react';
import renderer from 'react-test-renderer';
import { mockPeriodSelected } from './period-info-view.mock';
import PeriodInfoView from './period-info-view';

describe('PeriodInfoView', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <PeriodInfoView
          periodSelected={mockPeriodSelected}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
