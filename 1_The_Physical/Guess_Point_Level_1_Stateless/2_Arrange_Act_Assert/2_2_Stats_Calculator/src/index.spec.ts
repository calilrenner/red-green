import {FibonacciGenerator} from './index'

describe('FibonacciGenerator', () => {
    describe('Given that a positivie integer number has been passed in', () => {
        it.each([[3, 2], [0, 0], [8, 21]])('should generate the fibonacci number for %s position', (position, number) => {
            const fibonacciNumber = FibonacciGenerator.getNumber(position);
            expect(fibonacciNumber).toBe(number)
        })
    })
})