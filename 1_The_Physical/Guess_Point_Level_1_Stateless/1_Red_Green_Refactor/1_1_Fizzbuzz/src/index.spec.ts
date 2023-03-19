import { fizzbuzz } from './fizzbuzz';

describe("fizzbuzz", () => {
    const cases: Array<[number, string | number]> = [
        [17, 17],
        [33, 'Fizz'],
        [25, 'Buzz.'],
        [45, 'FizzBuzz.'],
        [30, 'FizzBuzz.'],
    ]

    describe('given a number between (including) 1 and 100', () => {
        it.each(cases)('should replace %s per %s', (number, expected) => expect(fizzbuzz(number)).toBe(expected))
    })
});
