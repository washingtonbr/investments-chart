import dayjs from 'dayjs';
import { configDate, date } from './date';

const mockDayjs = jest.fn();
const mockLocale = jest.fn();
const mockExtend = jest.fn();

jest.mock('dayjs');
dayjs.mockImplementation((value) => mockDayjs(value));
dayjs.locale.mockImplementation((value) => mockLocale(value));
dayjs.extend.mockImplementation((value) => mockExtend(value));

jest.mock('dayjs/locale/pt-br');

jest.mock('dayjs/plugin/isSameOrAfter');
jest.mock('dayjs/plugin/isSameOrBefore');

const mockTimestamp = '1587311825893';
const mockLocaleValue = 'pt-br';

describe('date', () => {
  afterEach(() => {
    mockDayjs.mockClear();
    mockLocale.mockClear();
    mockExtend.mockClear();
  });

  it('should define pt-br locale', () => {
    configDate();
    expect(mockLocale).toHaveBeenNthCalledWith(1, mockLocaleValue);
  });

  it('should extends dayjs with isSameOrAfter and isSameOrBefore plugins', () => {
    configDate();
    expect(mockExtend).toHaveBeenCalledTimes(2);
  });

  it('should calls Dayjs function with date value', () => {
    date(mockTimestamp);
    expect(mockDayjs).toHaveBeenNthCalledWith(1, mockTimestamp);
  });
});
