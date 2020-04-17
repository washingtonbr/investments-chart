import React from 'react';
import {
  SelectWrapper,
  Select,
  Option,
} from './data-filter-styles';

export default function DataFilterView() {
  return (
    <SelectWrapper>
      <Select>
        <Option selected>Desde o início</Option>
        <Option>Último mês</Option>
        <Option>3 meses</Option>
        <Option>1 ano</Option>
        <Option>2 anos</Option>
      </Select>
    </SelectWrapper>
  );
}
