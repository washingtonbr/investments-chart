import React from 'react';
import { action } from '@storybook/addon-actions';
import InvestmentsChart from './investments-chart-view';
import {
  mockLabels,
  mockData,
} from './investments-chart-view.mock';

export default {
  title: 'Components/Investments Chart',
};

export const standard = () => (
  <InvestmentsChart
    labels={mockLabels}
    data={mockData}
    tooltipsTitleCallback={action('tooltipsTitleCallback')}
    tooltipsLabelCallback={action('tooltipsLabelCallback')}
    xAxesTicksCallback={action('xAxesTicksCallback')}
    yAxesTicksCallback={action('yAxesTicksCallback')}
  />
);
