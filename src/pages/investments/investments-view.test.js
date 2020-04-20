import React from 'react';
import renderer from 'react-test-renderer';
import { useSelector } from 'react-redux';
import { date } from '../../utils/date';
import InvestmentsView from './investments-view';
import {
  mockLabels,
  mockData,
  mockisFetching,
  mockTimestamp,
} from './investments-view.mock';

jest.mock('../../redux/investments/selectors');

jest.mock('react-redux', () => ({
  useSelector: jest.fn()
    .mockReturnValueOnce((f) => f()),
  useDispatch: jest.fn(),
}));

jest.mock('../../utils/date', () => ({
  date: jest.fn().mockImplementation(() => ({
    subtract: jest.fn().mockImplementation(() => ({
      valueOf: jest.fn().mockImplementation(() => mockTimestamp),
    })),
  })),
}));

describe('InvestmentsView', () => {
  afterEach(() => {
    useSelector.mockClear();
    date.mockClear();
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(
        <InvestmentsView
          labels={mockLabels}
          data={mockData}
          isFetching={mockisFetching}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
