const base = require('../index');

//Exponential Tests
test(' 1 exponential 8 to equal 1', () => {
    expect(base.exponential([1,8])).toBe(1);
})

test(' 0 exponential 7 to equal 0', () => {
    expect(base.exponential([0,7])).toBe(0);
})

test(' 6 exponential 0 to equal 1', () => {
    expect(base.exponential([6,0])).toBe(1);
})

test(' 6 exponential 1 to equal 6', () => {
    expect(base.exponential([6,1])).toBe(6);
})

test('exponential 0 ** 2 ** 3 to equal 0', () => {
    expect(base.exponential([0,2,3])).toBe(0);
})

test('exponential 2 ** 2 ** 3 to equal 64', () => {
    expect(base.exponential([2,2,3])).toBe(64);
})

test('exponential 0 to equal 0', () => {
    expect(base.exponential([0])).toBe(0);
})

test('pass empty array to return undefined', () => {
    expect(base.exponential([])).toBe(undefined);
})

test("exponential 2 strings '2' and '10' to return 20", () => {
    expect(base.exponential(['2', '10'])).toBe(1024);
})

test('exponential a string and a number to return a string 0100', () => {
    expect(base.exponential(['3', 2])).toBe(9);
})

test('exponential a string and a number to return a string 0100', () => {
    expect(base.exponential(['B', 100])).toBe("Error");
})