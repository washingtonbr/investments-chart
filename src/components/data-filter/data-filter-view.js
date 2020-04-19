import React from 'react';
import {
  SelectWrapper,
  Select,
  Option,
} from './data-filter-styles';

export default function DataFilterView({
  options,
  setPeriod,
}) {
  return (
    <SelectWrapper>
      <Select onChange={(e) => setPeriod(e.target.value)}>
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
