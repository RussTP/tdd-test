const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const cipher = 'defghijklmnopqrstuvwxyzabc';

function caesarCipher(string, shift) {
let result = '';
for (let i = 0; i < string.length; i++) {
    let char = string[i];
    let isUpperCase = (char === char.toUpperCase());

    let currentIndex = alphabet.indexOf(char.toLowerCase());
    
    
    if (currentIndex !== -1) {
        let cipherChar = cipher[currentIndex];

        if (isUpperCase) {
            cipherChar = cipherChar.toUpperCase();
        }

        result += cipherChar;
    } else {
        result += char
        }
    }
return result;
}



module.exports = caesarCipher;