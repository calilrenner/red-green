import {FibonacciNumber} from './index'

describe('FibonacciNumber', () => {
    describe('Given that a positivie integer number has been passed in', () => {
        it('should generate the fibonacci number for 3 position', () => {
            const position: number = 3;
            const fibonacciNumber = FibonacciNumber.inPosition(position);
            expect(fibonacciNumber).toBe(2)
        })
    })
})