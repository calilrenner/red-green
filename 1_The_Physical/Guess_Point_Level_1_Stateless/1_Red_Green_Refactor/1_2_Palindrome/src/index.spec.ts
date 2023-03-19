import { palindromeChecker } from './index'

describe('palindrome checker', () => {
    const cases = [
        ['mom', true],
        [' mom', true],
        [' MoM ', true],
        ['Was It A Rat I Saw ', true],
        [' this is not a palindrome', false],
        ['palindrome', false]
    ]

    describe('if the given string is a palindrome', () => {
        it.each(cases)('Given the string %s, it should return %s', (string, expected) => expect(palindromeChecker(string as string)).toBe(expected))
    })
})