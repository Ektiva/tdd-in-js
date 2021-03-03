const base = require('../index');

test('add 1 + 2 to equal 3', () => {
    expect(base.add([1,2])).toBe(3);
})

test('add 0 + 2 to equal 2', () => {
    expect(base.add([0,2])).toBe(2);
})

test('add 0 + 2 + 3 to equal 5', () => {
    expect(base.add([0,2,3])).toBe(5);
})

test('add 0 to equal 0', () => {
    expect(base.add([0])).toBe(0);
})

test('pass empty array to return undefined', () => {
    expect(base.add([])).toBe(undefined);
})

test('add a string to return a string', () => {
    expect(base.add(['0', '100'])).toBe("0100");
})

test('add a string and a number to return a string 0100', () => {
    expect(base.add(['0', 100])).toBe("0100");
})
