import { formatMoney } from './string';

const mockValue = 100.15;

const mockValueFormatted = "R$\xa0100.15";

describe('obj', () => {
  it('should returns value in monetary format', () => {
    expect(formatMoney(mockValue)).toEqual(mockValueFormatted);
  });
});
