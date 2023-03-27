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

        it('should return the number of elements in the sequence', () => {
            expect(calculator.numberOfElements).toBe(3);
        })

        it('should return the number average value', () => {
            expect(calculator.averageValue).toBe(2);
        })
    })

    describe('given an array containing non integers', () => { 
        const integers = [1, 2.2, 3]
        it('should throw Not a valid number', () => {
            expect(() => StatusCalculator.new(integers)).toThrowError('Not a valid number')
        })
     })
})