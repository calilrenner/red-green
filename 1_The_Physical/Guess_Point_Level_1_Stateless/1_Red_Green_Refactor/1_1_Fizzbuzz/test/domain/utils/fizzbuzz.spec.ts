import { fizzbuzzReplacement } from '../../../src/domain/utils/fizzbuzz'
import {ArrayHasInvalidNumbersException} from '../../../src/domain/exceptions/array-has-invalid-numbers.exception'

describe("fizzbuzz", () => {
    describe("given an array of numbers from 1 to 100:", () => {
            it(`should replace any number divisible by three with the word "fizz"`, () => {
                const numbersToBeReplaced = [3, 9, 99];
                const replacedNumber = fizzbuzzReplacement(numbersToBeReplaced);
                const replacedNumbers = ['fizz', 'fizz', 'fizz']

                expect(replacedNumber).toEqual(replacedNumbers);
            })
        
            it(`should replace any number divisible by five with the word "buzz",`, () => {
                const numbersToBeReplaced = [5, 25, 100];
                const replacedNumber = fizzbuzzReplacement(numbersToBeReplaced);
                const replacedNumbers = ['buzz', 'buzz', 'buzz']

                expect(replacedNumber).toEqual(replacedNumbers);
            })
        
            it(`should replace any number divisible by both 3 and 5 with the word "fizzbuzz"`, () => {
                const numbersToBeReplaced = [15, 45];
                const replacedNumber = fizzbuzzReplacement(numbersToBeReplaced);
                const replacedNumbers = ['fizzbuzz', 'fizzbuzz']

                expect(replacedNumber).toEqual(replacedNumbers);
            })
        
    describe("otherwise", () => {
        describe("if the given array contain numbers greater then 100 and smaller then 1", () => {
            it('should throw ArrayHasInvalidNumbersError', () => {
                const numbersToBeReplaced = [1, 110, 100];
                
                expect(() => fizzbuzzReplacement(numbersToBeReplaced)).toThrow(ArrayHasInvalidNumbersException)
            })
        })
    })
    })
});