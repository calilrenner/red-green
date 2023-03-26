import { StatusCalculator } from './index'

describe('stats calculator', () => {
    describe('given an array of integer', () => {
        const integers = [1, 2, 3]
        const calculator = StatusCalculator.new(integers);
        it('should return the minimum value', () => {
            expect(calculator.minimumValue).toBe(1)
        })

        it('should return the maximum value', () => {
            expect(calculator.maximumValue).toBe(3);
        })
    })
})