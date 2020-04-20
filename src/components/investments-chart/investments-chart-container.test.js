import React from 'react';
import { shallow } from 'enzyme';
import InvestmentsChartContainer from './investments-chart-container';
import InvestmentsChartView from './investments-chart-view';
import {
  mockLabels,
  mockData,
  mockTimestamp,
  mockFormattedDate,
  mockValue,
  mockFormattedValue,
  mockFirstIndex,
  mockLastIndex,
} from './investments-chart-view.mock';

jest.mock('../../utils/date');

jest.mock('../../utils/date', () => ({
  date: jest.fn().mockImplementation(() => ({
    format: jest.fn().mockImplementation(() => ({
      toUpperCase: jest.fn().mockImplementation(() => mockFormattedDate),
    })),
  })),
}));

describe('InvestmentsChartContainer', () => {
  it('Should format the date of the first and last item and hide the others', () => {
    const wrapper = shallow(
      <InvestmentsChartContainer
        labels={mockLabels}
        data={mockData}
      />
    );
    const viewProps = wrapper
      .find(InvestmentsChartView)
      .first()
      .props();

    expect(viewProps.xAxesTicksCallback(mockTimestamp, mockFirstIndex, mockLabels)).toEqual(mockFormattedDate);
    expect(viewProps.xAxesTicksCallback(mockTimestamp, mockLastIndex, mockLabels)).toEqual(mockFormattedDate);
  });

  it('Should format the numbers divisib;le by three and hide the others', () => {
    const wrapper = shallow(
      <InvestmentsChartContainer
        labels={mockLabels}
        data={mockData}
      />
    );
    const viewProps = wrapper
      .find(InvestmentsChartView)
      .first()
      .props();

    expect(viewProps.yAxesTicksCallback(mockValue, mockFirstIndex)).toEqual(mockFormattedValue);
  });
});
