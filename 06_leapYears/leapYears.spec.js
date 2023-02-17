const leapYears = function(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

module.exports = leapYears;

describe('leapYears', () => {
  test('works with non century years', () => {
    expect(leapYears(1996)).toBe(true);
  });
  test('works with non century years', () => {
    expect(leapYears(1997)).toBe(false);
  });
  test('works with ridiculously futuristic non century years', () => {
    expect(leapYears(34992)).toBe(true);
  });
  test('works with century years', () => {
    expect(leapYears(1900)).toBe(false);
  });
  test('works with century years', () => {
    expect(leapYears(1600)).toBe(true);
  });
  test('works with century years', () => {
    expect(leapYears(700)).toBe(false);
  });
});
