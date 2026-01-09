const calculator = require('./calculator');

test('add two number inputs', () => {
    expect(calculator.add(2, 2)).toBe(2 + 2)
});

test('subtract two number inputs', () => {
    expect(calculator.subtract(5, 2)).toBe(5 - 2)
});

test('multiply two number inputs', () => {
    expect(calculator.multiply(10, 5)).toBe(10 * 5)
});

test('divide two number inputs', () => {
    expect(calculator.divide(10, 2)).toBe(10 / 2)
});
