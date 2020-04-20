import React from 'react';
import { shallow } from 'enzyme';
import { useSelector } from 'react-redux';
import InvestmentContainer from './investments-container';
import InvestmentsView from './investments-view';
import { getInvestmentsFiltered } from '../../redux/investments/selectors';
import {
  mockInvestments,
  mockLabels,
  mockData,
} from './investments-view.mock';

jest.mock('../../redux/investments/selectors');
getInvestmentsFiltered.mockImplementation(() => mockInvestments);

jest.mock('react-redux', () => ({
  useSelector: jest.fn()
    .mockImplementation((f) => f()),
  useDispatch: jest.fn(),
}));

describe('InvestmentContainer', () => {
  afterEach(() => {
    useSelector.mockClear();
  });

  it('should returns chart labels', () => {
    const wrapper = shallow(<InvestmentContainer />);
    const viewProps = wrapper
      .find(InvestmentsView)
      .first()
      .props();

    expect(viewProps.labels).toEqual(mockLabels);
  });

  it('should returns chart data', () => {
    const wrapper = shallow(<InvestmentContainer />);
    const viewProps = wrapper
      .find(InvestmentsView)
      .first()
      .props();

    expect(viewProps.data).toEqual(mockData);
  });
});
