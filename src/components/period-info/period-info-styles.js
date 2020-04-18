import styled from 'styled-components';
import IconCalendar from '../../images/icon-calendar.svg';

export const Wrapper = styled.div`
  width: calc(100% - 70px);
  height: 54px;
  line-height: 54px;
  margin-bottom: 30px;
  background-color: #F6F7F9;
  background-image: url(${IconCalendar});
  background-repeat: no-repeat;
  background-position: 40px center;
  background-size: 18px;
  padding-left: 70px;
  color: #577082;
`;
