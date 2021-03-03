const base = require('../index');

// Multiple Test

test('multiply 1 * 2 to equal 2', () => {
    expect(base.multiple([1,2])).toBe(2);
})

test('multiply 0 * 2 to equal 0', () => {
    expect(base.multiple([0,2])).toBe(0);
})

test('multiply 0 * 2 * 3 to equal 0', () => {
    expect(base.multiple([0,2,3])).toBe(0);
})

test('multiply 0 to equal 0', () => {
    expect(base.multiple([0])).toBe(0);
})

test('pass empty array to return undefined', () => {
    expect(base.multiple([])).toBe(undefined);
})

test("multiply 2 string '2' and '10' to return 20", () => {
    expect(base.multiple(['2', '10'])).toBe(20);
})

test('multiply a string and a number to return a string 0100', () => {
    expect(base.multiple(['3', 100])).toBe(300);
})

test('multiply a string and a number to return a string 0100', () => {
    expect(base.multiple(['B', 100])).toBe("Error");
})