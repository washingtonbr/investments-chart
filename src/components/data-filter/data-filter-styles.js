import styled from 'styled-components';
import IconCalendar from '../../images/icon-calendar.svg';

export const SelectWrapper = styled.div`
  width: 110px;
  overflow: hidden;
  position: relative;
  
  &::after {
    display: block;
    position: absolute;
    content: 'Período';
    top: 0;
    left: 40px;
    font-size: 20px;
    height: 28px;
    line-height: 32px;
    z-index: 8;
    font-weight: 600;
  }
`;

export const Select = styled.select`
  width: 125px;
  height: 28px;
  border: 0;
  outline: 0;
  background: url(${IconCalendar}) no-repeat center left;
  text-indent: -9999px;
  z-index: 9;
  position: relative;
`;

export const Option = styled.option`
  font-size: 14px;
`;
