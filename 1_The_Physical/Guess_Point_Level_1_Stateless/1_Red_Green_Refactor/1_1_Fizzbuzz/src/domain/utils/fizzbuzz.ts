import { ArrayHasInvalidNumbersException } from "../exceptions/array-has-invalid-numbers.exception";

export function fizzbuzzReplacement (sequence: number[]): [...Array<string | number>] | undefined {
    const fizzbuzzSequence = [];
    for (let number of sequence) {
        const dividedByThree = number % 3 === 0;
        const dividedByFive = number % 5 === 0;

        const invalidNumber = number < 1 || number > 100;

        if (invalidNumber) {
            throw new ArrayHasInvalidNumbersException(`Invalid number`)
        }

        if (dividedByThree && dividedByFive) {
            fizzbuzzSequence.push('fizzbuzz');
        } else if (dividedByFive) {
            fizzbuzzSequence.push('buzz');
        } else if (dividedByThree) {
            fizzbuzzSequence.push('fizz');
        } else {
            fizzbuzzSequence.push(number)
        }
    }

    return fizzbuzzSequence;
}