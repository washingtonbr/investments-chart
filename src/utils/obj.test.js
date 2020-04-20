import { objEquals } from './obj';

const mockObjA = {
  a: 'valueA',
};

const mockObjADuplicated = {
  a: 'valueA',
};

const mockObjB = {
  b: 'valueB',
};

describe('obj', () => {
  it('should returns truth for equal objects', () => {
    expect(objEquals(mockObjA, mockObjADuplicated)).toBeTruthy();
  });

  it('should returns falsy for different objects', () => {
    expect(objEquals(mockObjA, mockObjB)).toBeFalsy();
  });
});
