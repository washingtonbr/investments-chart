import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import DataFilterView from './data-filter-view';
import {
  mockPeriodSelected,
  mockOptions,
} from './data-filter-view.mock';
import { Select } from './data-filter-view.styles';

const mockSetPeriod = jest.fn();

describe('DataFilterView', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <DataFilterView
          periodSelected={mockPeriodSelected}
          options={mockOptions}
          setPeriod={mockSetPeriod}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('should call setPeriod function', () => {
    const wrapper = shallow(
      <DataFilterView
        periodSelected={mockPeriodSelected}
        options={mockOptions}
        setPeriod={mockSetPeriod}
      />,
    );

    wrapper
      .find(Select)
      .first()
      .simulate('change', {
        target: {
          value: '1',
        },
      });

    expect(mockSetPeriod).toBeCalledTimes(1);
  });
});
