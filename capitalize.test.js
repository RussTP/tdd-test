const capitalize = require('./capitalize');

test('take a string and return with the first character capitalized', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
});

console.log(capitalize('hello'))  
console.log(capitalize('world'))

