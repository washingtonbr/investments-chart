import React from 'react';
import { action } from '@storybook/addon-actions';
import DataFilterView from './data-filter-view';
import {
  mockPeriodSelected,
  mockOptions,
} from './data-filter-view.mock';

export default {
  title: 'Components/Data Filter',
};

export const standard = () => (
  <DataFilterView
    periodSelected={mockPeriodSelected}
    options={mockOptions}
    setPeriod={action('setPeriod')}
  />
);
