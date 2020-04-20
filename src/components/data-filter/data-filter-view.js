import React from 'react';
import {
  SelectWrapper,
  Select,
  Option,
} from './data-filter-view.styles';

export default function DataFilterView({
  periodSelected,
  options,
  setPeriod,
}) {
  return (
    <SelectWrapper>
      <Select
        value={periodSelected}
        onChange={(e) => setPeriod(e.target.value)}>
        {options.map((option, index) => (
          <Option
            key={`option${index}`}
            value={index}>
            {option.label}
          </Option>
        ))}
      </Select>
    </SelectWrapper>
  );
}
