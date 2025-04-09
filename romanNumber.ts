const ROMAN_I = 1;
const ROMAN_V = 5;

const romanDigits = [
    [1,'I'],
    [5,'V']
]

export default function romanNumber(num: number): string  {
    let romanNumber = '';

    if (num >= ROMAN_V) {
        romanNumber += 'V';
    }
    romanNumber += 'I'.repeat(num % ROMAN_V);
    return romanNumber;
}