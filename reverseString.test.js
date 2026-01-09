const reverseString = require('./reverseString');

test('take a string and reverse it', () => {
    expect(reverseString('hello')).toBe('olleh');
});

console.log(reverseString('hello'))
console.log(reverseString('world'))