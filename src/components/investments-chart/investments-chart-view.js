import React from 'react';
import Chart from '../chart';

export default function InvestmentsChartView({
  labels,
  data,
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
      mode: 'index',
      intersect: false,
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
            fontSize: 11,
            padding: 10,
            fontColor: '#8C9DAA',
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
            callback: function(value, index) {
              if (!(index % 3)) return `${value / 1000}K`;
            },
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

  return (
    <Chart
      type={chartType}
      data={chartData}
      options={chartOptions}
    />
  );
}
