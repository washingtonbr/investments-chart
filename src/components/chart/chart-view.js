import React, { useRef, useEffect, useState } from 'react';
import Chart from 'chart.js';
import { objEquals } from '../../utils/obj';

export default function ChartView({
	type,
	data,
	options,
  width = 100,
  height = 55,
}) {
  const [chart, setChart] = useState();
  const canvasElm = useRef(null);

  useEffect(() => {
    const ctx = canvasElm.current.getContext('2d');
    const newChart = new Chart(ctx, {
			type,
      options,
			data: {},
    });

    setChart(newChart);
  }, [type, options]);

  useEffect(() => {
    if (!chart || objEquals(chart.data.labels, data.labels))
      return;

    const newChart = Object.assign(chart, {});
    newChart.data = data;
    newChart.update();
    setChart(newChart);
  }, [chart, data]);

  return (
    <canvas
      ref={canvasElm}
      width={width}
      height={height}>
    </canvas>
  );
}
