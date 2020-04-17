import React from 'react';
import renderer from 'react-test-renderer';
import PeriodInfoView from './period-info-view';

describe('PeriodInfoView', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<PeriodInfoView />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
