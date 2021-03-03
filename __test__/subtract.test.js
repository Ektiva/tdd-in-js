const base = require('../index');

test('subtract 1 - 2 to equal -1', () => {
    expect(base.subtract([1, 2])).toBe(-1);
})

test('subtract 0 - 2 to equal -2', () => {
    expect(base.subtract([0, 2])).toBe(-2);
})

test('subtract 0 - 2 - 3 to equal -5', () => {
    expect(base.subtract([0, 2, 3])).toBe(-5);
})

test('subtract 0 to equal 0', () => {
    expect(base.subtract([0])).toBe(0);
})

test('pass empty array', () => {
    expect(base.subtract([])).toBe(undefined);
})

test('subtract a string to return a string', () => {
    expect(base.subtract(['0'])).toBe('0');
})

test('subtract \'0\' - \'1\' to equal a -1', () => {
    expect(base.subtract(['0', '1'])).toBe(-1);
})

test('subtract \'bill\' - \'parrot\' to return NaN', () => {
    expect(base.subtract(['bill', 'parrot'])).toBe(NaN);
})

test('subtract \'1\' - 100 to equal -99', () => {
    expect(base.subtract(['1', 100])).toBe(-99);
})