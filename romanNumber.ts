const ROMAN_I = 1;
const ROMAN_V = 5;
const ROMAN_X = 10;

// const romanDigits = [
//     [1,'I'],
//     [5,'V']
// ]

export default function romanNumber(num: number): string  {
    let romanNumber = '';

    if (num >= ROMAN_X) {
        romanNumber += 'X';
    }
    if (num % ROMAN_X >= ROMAN_V) {
        romanNumber += 'V';
    }
    if(num % ROMAN_V === 4) {
        romanNumber += 'IV'
    } else {
        romanNumber += 'I'.repeat(num % ROMAN_V);
    }

    return romanNumber;
}