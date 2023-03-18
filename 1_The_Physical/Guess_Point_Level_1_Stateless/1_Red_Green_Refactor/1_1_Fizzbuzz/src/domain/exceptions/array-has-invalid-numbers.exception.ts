export class ArrayHasInvalidNumbersException extends Error {
    constructor(message: string) {
        super(message)
        Object.setPrototypeOf(this, ArrayHasInvalidNumbersException.prototype);
    }
}