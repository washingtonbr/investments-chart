export const mockInvestments = [
  [
    1565308800000,
    24960
  ],
  [
    1565568000000,
    24960
  ],
  [
    1565654400000,
    24963.28
  ],
  [
    1565740800000,
    24966.55
  ],
  [
    1565827200000,
    24969.83
  ],
  [
    1565913600000,
    24973.11
  ],
  [
    1566172800000,
    24976.39
  ],
  [
    1566259200000,
    24979.67
  ],
  [
    1566345600000,
    24982.95
  ],
  [
    1566432000000,
    54866.23
  ],
];

export const mockError = {
  status: 500,
  message: 'Internal Server Error',
};

export const mockState = {
  investments: {
    isFetching: false,
    error: mockError,
    periodSelected: {
      label: 'Desde o início',
      startDate: null,
      endDate: null,
    },
    items: mockInvestments,
  },
};

export const mockInitialState = mockState.investments;

export const mockPeriodSelected = {
  label: 'Último mês',
  startDate: '1584654468935',
  endDate: '1587332868951',
};

export const mockTimestamp = '1587311825893';
