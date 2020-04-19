import React from 'react';
import renderer from 'react-test-renderer';
import DataFilterView from './data-filter-view';
import { mockOptions } from './data-filter-view.mock';

describe('DataFilterView', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <DataFilterView
          options={mockOptions}
          setPeriod={() => {}}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
