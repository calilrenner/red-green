export class ArrayHasInvalidNumbersError extends Error {
    constructor(message: string) {
        super(message)
        Object.setPrototypeOf(this, ArrayHasInvalidNumbersError.prototype);
    }
}