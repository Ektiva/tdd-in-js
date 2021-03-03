const base = require('../index');

/*
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

// Test to fail
test('return the same number', () => {
    expect(base.samenumber(0)).toBe(0);
})

test('substract 0-2 to equal -2', () => {
    expect(base.substract([0, 2])).toBe(-2);
})

test("substract 'bill' - 'parrot' to equal NaN", () => {
    expect(base.substract(['bill', 'parrot'])).toBe(NaN);
})

test("substract a string '100' and a number to 1100", () => {
    expect(base.substract([0, '100'])).toBe(-100);
})

test('divide 1/1 to equal 1', () => {
    expect(base.divide([1,1])).toBe(1);
})

test('divide 8/2 to equal 4', () => {
    expect(base.divide([8,2])).toBe(4);
})

test('divide 1/0 to equal Error', () => {
    expect(base.divide([1,0])).toBe("Can not divide by zero");
})

test('divide 1/0/1 to equal Error', () => {
    expect(base.divide([1,0,1])).toBe("Can not divide by zero");
})

test("divide 1/'0'/1 to equal Error", () => {
    expect(base.divide([1,'0',1])).toBe("Error");
})

test("divide 1/'build'/1 to equal Error", () => {
    expect(base.divide([1,'build',1])).toBe("Error");
})

test("divide a number 4 and one string 'build' to equal Error", () => {
    expect(base.divide([4,'build'])).toBe("Error");
})

test("divide string '0' by a number 2 to equal 0", () => {
    expect(base.divide(['0',2])).toBe(0);
})

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
*/
// Modulo Tests
/*
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
})*/

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

test('exponential 0 * 2 * 3 to equal 0', () => {
    expect(base.exponential([0,2,3])).toBe(0);
})

test('exponential 2 * 2 * 3 to equal 64', () => {
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

test('multiply a string and a number to return a string 0100', () => {
    expect(base.exponential(['3', 2])).toBe(9);
})

test('multiply a string and a number to return a string 0100', () => {
    expect(base.exponential(['B', 100])).toBe("Error");
})
