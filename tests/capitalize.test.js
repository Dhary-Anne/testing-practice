const capitalize = require('../code/capitalize');

test('uppercase', () => {
    expect(capitalize('adam')).toBe('ADAM');
});