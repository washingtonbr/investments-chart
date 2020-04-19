import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPeriodSelected } from '../../redux/investments/actions';
import { getInvestments } from '../../redux/investments/selectors';
import DataFilterView from './data-filter-view';
import { date } from '../../utils/date';

export default function DataFilterContainer() {
  const investmentsData = useSelector(getInvestments);
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
      label: '2 ano',
      startDate: date().subtract(24, 'month').valueOf(),
    },
  ]);

  function setPeriod(index) {
    const { label, startDate, endDate } = options[index];
    dispatch(setPeriodSelected(label, startDate, endDate));
  }

  useEffect(() => {
    if (!investmentsData.length) return;
    const [firstDate] = investmentsData[0];
    const [lastDate] = investmentsData[investmentsData.length - 1];
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
      if (date(firstDate).isSameOrAfter(startDate) &&
        date(lastDate).isSameOrBefore(endDate)) {
        newOptions.push({
          label,
          startDate,
          endDate,
        });
      }
    });

    setOptions(newOptions);
  }, [investmentsData, periodList]);

  return (
    <DataFilterView
      options={options}
      setPeriod={setPeriod}
    />
  );
}
