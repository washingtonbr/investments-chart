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
  mockTitleTooltipItem,
  mockLabelTooltipItem,
  mockTooltipLabel,
} from './investments-chart-view.mock';

jest.mock('../../utils/string', () => ({
  formatMoney: jest.fn().mockImplementation(() =>  mockTooltipLabel),
}));

jest.mock('../../utils/date', () => ({
  date: jest.fn().mockImplementation(() => ({
    format: jest.fn().mockImplementation(() => ({
      toUpperCase: jest.fn().mockImplementation(() => mockFormattedDate),
    })),
  })),
}));

describe('InvestmentsChartContainer', () => {
  it('should format the tooltip title', () => {
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

    expect(viewProps.tooltipsTitleCallback(mockTitleTooltipItem)).toEqual(mockFormattedDate);
  });

  it('should format the tooltip label', () => {
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

    expect(viewProps.tooltipsLabelCallback(mockLabelTooltipItem)).toEqual(mockTooltipLabel);
  });

  it('should format the date of the first and last item and hide the others', () => {
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

  it('should format the numbers divisible by three and hide the others', () => {
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
