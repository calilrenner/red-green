import { StatsCalculator } from './index'

describe('stats calculator', () => {
    describe('Given a sequence of numbers', () => {
        const sequenceOfNumbers = [2, 4, 21, -8, 53, 40]

        it(`Should return an object containing the properties [minimum, maximum, average, length]`, () => {
            expect(StatsCalculator.new({list: sequenceOfNumbers}).minimum).toBe(-8)
            expect(StatsCalculator.new({list: sequenceOfNumbers}).maximum).toBe(53)
            expect(StatsCalculator.new({list: sequenceOfNumbers}).average).toBe(18.666666666667)
            expect(StatsCalculator.new({list: sequenceOfNumbers}).length).toBe(6)
        })
    })
})