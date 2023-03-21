import { passwordValidator } from './index'

describe('password validator', () => {
    describe('valid password', () => {
        it(`should return an object with the following properties:
        - result: boolean;
        - errors: []
        `, () => {
            expect(passwordValidator('12345')).toStrictEqual({result: true, errors: []})
        })
    })

    describe('otherwise', () => {
        describe('invalid password', () => {
            describe('password has up to 4 characters long', () => {
                it(`should return:
                - result: false,
                - errors: [passwordInvalidLength]
                `, () => {
                    const expected = {
                        result: false,
                        errors: ['passwordInvalidLength']
                    }

                    expect(passwordValidator('1234')).toStrictEqual(expected)
                })
            })
            describe('password has more then 15 characters long', () => {
                it(`should return:
                - result: false,
                - errors: [passwordInvalidLength]
                `, () => {
                    const expected = {
                        result: false,
                        errors: ['passwordInvalidLength']
                    }

                    expect(passwordValidator('123456789abcdefg')).toStrictEqual(expected)
                })
            })
            describe('password do not have at least one digit', () => {
                it(`should return:
                - result: false,
                - errors: [passwordMustHaveAtLeastOneDigit]
                `, () => {
                    const expected = {
                        result: false,
                        errors: ['passwordMustHaveAtLeastOneDigit']
                    }

                    expect(passwordValidator('abcdefgh')).toStrictEqual(expected)
                })
            })
        })
    })
})

