import styled from 'styled-components';
import IconCalendar from '../../images/icon-calendar.svg';

export const SelectWrapper = styled.div`
  position: relative;

  &::after {
    display: block;
    position: absolute;
    content: 'Período';
    top: 0;
    left: 40px;
    font-size: 18px;
    height: 28px;
    line-height: 28px;
    z-index: 8;
    font-weight: 600;
  }
`;

export const Select = styled.select`
  width: 115px;
  height: 28px;
  border: 0;
  outline: 0;
  appearance: none;
  background: url(${IconCalendar}) no-repeat center left;
  background-size: 28px;
  text-indent: -9999px;
  z-index: 9;
  position: relative;
`;

export const Option = styled.option`
  font-size: 14px;
`;
