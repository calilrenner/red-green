import { ArrayHasInvalidNumbersException } from "../exceptions/array-has-invalid-numbers.exception";

export function fizzbuzzReplacement (sequence: number[]): string {
    return sequence.reduce<string>((result: string, number: number): string => {
        const dividedByThree = number % 3 === 0;
        const dividedByFive = number % 5 === 0;
        const invalidNumber = number < 1 || number > 100;

        if (invalidNumber) {
            throw new ArrayHasInvalidNumbersException(`Invalid number`)
        }

        if (dividedByThree && dividedByFive) {
            result += 'fizzbuzz'
        } else if (dividedByFive) {
            result += 'buzz'
        } else if (dividedByThree) {
            result += 'fizz'
        } else {
            result += number
        }

        return result;
    }, "")
}