import React from 'react';
import { date } from '../../utils/date';
import { formatMoney } from '../../utils/string';
import InvestmentsChartView from './investments-chart-view';

export default function InvestmentsChartContainer({
  labels,
  data,
}) {
  function tooltipsTitleCallback(tooltipItem) {
    const [{ label }] = tooltipItem;
    return date(parseInt(label)).format('DD MMM YYYY').toUpperCase();
  }

  function tooltipsLabelCallback(tooltipItem) {
    return formatMoney(tooltipItem.value);
  }

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
      tooltipsTitleCallback={tooltipsTitleCallback}
      tooltipsLabelCallback={tooltipsLabelCallback}
      xAxesTicksCallback={xAxesTicksCallback}
      yAxesTicksCallback={yAxesTicksCallback}
    />
  ) : (<>Não há dados para o período selecionado.</>);
}
