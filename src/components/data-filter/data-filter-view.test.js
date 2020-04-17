import React from 'react';
import renderer from 'react-test-renderer';
import DataFilterView from './data-filter-view';

describe('DataFilterView', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<DataFilterView />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
