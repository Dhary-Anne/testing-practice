const calculator = require('../code/calculator')

test('add 1 + 4', () => {
    expect(calculator.add(1,4)).toBe(5)
});

test('subtract 10 - 6', () => {
    expect(calculator.subtract(10, 6)).toBe(4)
});

test('multiply 8 * 4', () => {
    expect(calculator.multiply(8,4)).toBe(32)
});

test('divide 24 / 12', () => {
    expect(calculator.divide(24,12)).toBe(2)
})

test('divide by o to be null', () => {
    expect(calculator.divide(12, 0)).toBeNull
});