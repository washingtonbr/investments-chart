import React from 'react';
import { Wrapper } from './period-info-styles';

export default function PeriodInfoView({
  periodSelected
}) {
  return (
    <Wrapper>
      Você está vendo o período <strong>{periodSelected}</strong>.
    </Wrapper>
  );
}
