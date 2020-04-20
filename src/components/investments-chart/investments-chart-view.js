import React from 'react';
import Chart from '../chart';

export default function InvestmentsChartView({
  labels,
  data,
  tooltipsTitleCallback,
  tooltipsLabelCallback,
  xAxesTicksCallback,
  yAxesTicksCallback,
}) {
  const chartType = 'line';
  const chartData = {
    labels,
    datasets: [
      {
        backgroundColor: 'rgb(112,194,234,0.75)',
        borderColor: '#169CE4',
        data,
        fill: 'start',
        lineTension: 0,
        pointRadius: 1,
        pointStyle: 'dash',
      },
    ],
  };
  const chartOptions = {
    responsive: true,
    legend: {
      display: false,
    },
    tooltips: {
      callbacks: {
        title: tooltipsTitleCallback,
        label: tooltipsLabelCallback,
      },
      mode: 'index',
      intersect: false,
      displayColors: false
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      xAxes: [
        {
          display: true,
          gridLines: {
            drawOnChartArea: false,
            color: 'rgba(0,0,0,0)',
          },
          ticks: {
            callback: xAxesTicksCallback,
            fontSize: 11,
            padding: 10,
            fontColor: '#8C9DAA',
            autoSkip: false,
            maxRotation: 0,
            minRotation: 0,
          },
        }
      ],
      yAxes: [
        {
          display: true,
          position: 'right',
          gridLines: {
            color: 'rgba(87,112,130,0.08)',
          },
          ticks: {
            callback: yAxesTicksCallback,
            autoSkip: false,
            fontSize: 14,
            padding: 10,
            fontColor: '#CCC',
            fontStyle: 'bold',
          }
        },
      ],
    },
  };

  return data.length ? (
    <Chart
      type={chartType}
      data={chartData}
      options={chartOptions}
    />
  ) : (<>Não há dados para o período selecionado.</>);
}
