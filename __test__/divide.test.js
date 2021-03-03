const base = require('../index');

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