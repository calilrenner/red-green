import { palindromeChecker } from './index';

describe('palindrome checker', () => {
    const cases: Array<[string, boolean]> = [
        ['mom', true],
        [' mom', true],
        [' MoM ', true],
        ['Was It A Rat I Saw ', true],
        [' this is not a palindrome', false],
        ['palindrome', false]
    ]
    
     describe('if the given string is a palindrome', () => {
         it.each(cases)('given the case %s, it should return %s', (string, expected) => expect(palindromeChecker(string)).toBe(expected))
     })
})