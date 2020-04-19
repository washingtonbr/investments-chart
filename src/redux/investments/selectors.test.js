import * as selectors from './selectors';
import {
  mockState,
  mockError,
  mockPeriodSelected,
} from './investments.mock';

jest.mock('../../utils/date', () => ({
  date: jest.fn().mockImplementation(() => ({
    isSameOrAfter: jest.fn().mockImplementation(() => false),
    isSameOrBefore: jest.fn().mockImplementation(() => false),
  })),
}));

describe('investments selectors', () => {
  test('getInvestmentsState should returns investments state', () => {
    expect(selectors.getInvestmentsState(mockState)).toEqual(mockState.investments);
  });

  test('getInvestments should returns investments list', () => {
    expect(selectors.getInvestments(mockState)).toEqual(mockState.investments.items);
  });

  test('getInvestmentsFiltered should returns investments list', () => {
    expect(selectors.getInvestmentsFiltered(mockState)).toEqual(mockState.investments.items);
  });

  test('getInvestmentsFiltered should returns investments filtered list', () => {
    const mockStateFiltered = {
      investments: {
        ...mockState.investments,
        periodSelected: mockPeriodSelected,
      }
    };
    expect(selectors.getInvestmentsFiltered(mockStateFiltered)).toEqual([]);
  });

  test('getError should returns error object', () => {
    expect(selectors.getError(mockState)).toEqual(mockError);
  });

  test('isFetching should returns false', () => {
    expect(selectors.isFetching(mockState)).toEqual(false);
  });
});
