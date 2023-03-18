import { fizzbuzzReplacement } from './fizzbuzz'
import {ArrayHasInvalidNumbersError} from './array-has-invalid-numbers'

describe("fizzbuzz", () => {
    describe("given an array of numbers from 1 to 100:", () => {
            it(`
                should replace any number divisible by three with the word "fizz",
                any number divisible by five with the word "buzz"
                and any number divisible by both 3 and 5 with the word "fizzbuzz"
                `, () => {
                const numbersToBeReplaced = [1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 100];
                const replacedNumber = fizzbuzzReplacement(numbersToBeReplaced);
                const replacedNumbers = [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'fizzbuzz', 'buzz']

                expect(replacedNumber).toEqual(replacedNumbers);
            })
        
    describe("otherwise", () => {
        describe("if the given array contain numbers greater then 100 and smaller then 1", () => {
            it('should throw an error', () => {
                const numbersToBeReplaced = [1, 110, 100];
                
                expect(() => fizzbuzzReplacement(numbersToBeReplaced)).toThrow(ArrayHasInvalidNumbersError)
            })
        })
    })
    })
});