const base = require('../index');

// Modulo Tests

test('20 modulo 3 to equal 2', () => {
    expect(base.modulo([20,3])).toBe(2);
})

test('20 modulo 0 to equal 20', () => {
    expect(base.modulo([20,0])).toBe('Error');
})

test('modulo 20 % 2 % 3 to equal 0', () => {
    expect(base.modulo([20,2,3])).toBe(0);
})

test('pass 0 to equal 0', () => {
    expect(base.modulo([0])).toBe(0);
})

test('pass empty array to return undefined', () => {
    expect(base.modulo([])).toBe(undefined);
})

test("modulo of 2 string '2' and '10' to return 20", () => {
    expect(base.modulo(['2', '10'])).toBe(2);
})

test('modulo of a string and a number to return a string 0100', () => {
    expect(base.modulo(['3', 100])).toBe(3);
})

test('modulo of a string and a number to return a string 0100', () => {
    expect(base.modulo(['B', 100])).toBe("Error");
})