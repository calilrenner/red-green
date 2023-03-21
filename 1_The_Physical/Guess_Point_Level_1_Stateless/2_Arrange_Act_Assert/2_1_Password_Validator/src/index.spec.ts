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
            const password = '1234';
            describe('password has up to 4 characters long', () => {
                it(`should return:
                - result: false,
                - errors: [passwordInvalidLength]
                `, () => {
                    const expected = {
                        result: false,
                        errors: ['passwordInvalidLength']
                    }

                    expect(passwordValidator(password)).toStrictEqual(expected)
                })
            })
        })
    })
})

