import React from 'react';
import renderer from 'react-test-renderer';
import PeriodInfoView from './period-info-view';

const mockPeriodSelected = 'Desde o início';

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
