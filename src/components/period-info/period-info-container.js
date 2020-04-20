import React from 'react';
import { useSelector } from 'react-redux';
import PeriodInfoView from './period-info-view';
import { getPeriodSelected } from '../../redux/investments/selectors';

export default function PeriodInfoContainer() {
  const periodSelected = useSelector(getPeriodSelected);

  return periodSelected && periodSelected.label ? (
    <PeriodInfoView
      periodSelected={periodSelected.label}
    />
  ) : (<></>);
}
