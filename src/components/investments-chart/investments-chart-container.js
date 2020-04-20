import React from 'react';
import { date } from '../../utils/date';
import InvestmentsChartView from './investments-chart-view';

export default function InvestmentsChartContainer({
  labels,
  data,
}) {
  function xAxesTicksCallback(item, index, list) {
    if (index === 0 || index === list.length - 1)
      return date(item).format('DD MMM YYYY').toUpperCase();
  }

  function yAxesTicksCallback(value, index) {
    if (!(index % 3))
      return `${value / 1000}K`;
  }

  return data.length ? (
    <InvestmentsChartView
      labels={labels}
      data={data}
      xAxesTicksCallback={xAxesTicksCallback}
      yAxesTicksCallback={yAxesTicksCallback}
    />
  ) : (<>Não há dados para o período selecionado.</>);
}
