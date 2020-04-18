import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js';

export default function ChartView({
	type,
	data,
	options,
}) {
  const canvasElm = useRef(null);

  useEffect(() => {
    const ctx = canvasElm.current.getContext('2d');
    new Chart(ctx, {
			type,
			data,
			options,
		});
  }, [type, data, options]);

  return (
    <canvas
      ref={canvasElm}
      width="400"
      height="200">
    </canvas>
  );
}
