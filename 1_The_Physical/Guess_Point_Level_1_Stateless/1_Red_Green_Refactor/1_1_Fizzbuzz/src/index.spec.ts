import {fizzbuzzReplacement} from './fizzbuzz'

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
    })
});