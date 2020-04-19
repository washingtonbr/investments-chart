import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPeriodSelected } from '../../redux/investments/actions';
import DataFilterView from './data-filter-view';
import { date } from '../../utils/date';

export default function DataFilterContainer() {
  const dispatch = useDispatch();
  const [options, setOptions] = useState([]);
  const [periodList] = useState([
    {
      label: 'Último mês',
      startDate: date().subtract(1, 'month').valueOf(),
    },
    {
      label: '3 meses',
      startDate: date().subtract(3, 'month').valueOf(),
    },
    {
      label: '1 ano',
      startDate: date().subtract(12, 'month').valueOf(),
    },
    {
      label: '2 anos',
      startDate: date().subtract(24, 'month').valueOf(),
    },
  ]);

  function setPeriod(index) {
    const { label, startDate, endDate } = options[index];
    dispatch(setPeriodSelected(label, startDate, endDate));
  }

  useEffect(() => {
    const endDate = date().valueOf();
    const newOptions = [
      {
        label: 'Desde o início',
        startDate: null,
        endDate: null,
      },
    ];

    periodList.forEach((period) => {
      const { label, startDate } = period;
      newOptions.push({
        label,
        startDate,
        endDate,
      });
    });

    setOptions(newOptions);
  }, [periodList]);

  return (
    <DataFilterView
      options={options}
      setPeriod={setPeriod}
    />
  );
}
