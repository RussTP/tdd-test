const caesarCipher = require('./caesarCipher');

test('any given letter a-z will encrpyt as cipher which shifts to the follow 3rd letter', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
   
});

console.log(caesarCipher('Hello, World!', 3))
