import React from 'react';
import { mockPeriodSelected } from './period-info-view.mock';
import PeriodInfoView from './period-info-view';

export default {
  title: 'Components/Period Info',
};

export const standard = () => (
  <PeriodInfoView
    periodSelected={mockPeriodSelected}
  />
);
