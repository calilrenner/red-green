import { PasswordValidationErrors, PasswordValidationReturn, PasswordValidator } from './index';

describe('password validator', () => {
    describe('invalid passwords', () => {   
        const cases: Array<[string, PasswordValidationReturn]> = [
            ['thePhysical1234567', { result: false, errors: [{ type: 'Invalid length', message: 'Password must be within 5 to 15 characters long' }] }],
            ['maxwellTheBe', { result: false, errors: [{ type: 'Digit missing', message: 'Password must have at least 1 digit' }] }],
            ['maxwell1_c', { result: false, errors: [{ type: 'Uppercase letter missing', message: 'Password must have at least 1 uppercase letter' }] }],
            ['abc', { result: false, errors: [{ type: 'Invalid length', message: 'Password must be within 5 to 15 characters long' },{ type: 'Digit missing', message: 'Password must have at least 1 digit' }, { type: 'Uppercase letter missing', message: 'Password must have at least 1 uppercase letter' }] }]
        ]

        it.each(cases)('given %s, should return an object containing %s', (password, expected) => {
                //act
                const returnObject = PasswordValidator.validate(password);

                //assert
                expect(returnObject.result).toBe(expected.result);
                expect(returnObject.errors.length).toBe(expected.errors.length)
                expect(returnObject.errors[0].message).toBe(expected.errors[0].message)
                expect(returnObject.errors[0].type).toBe(expected.errors[0].type)
        })
    })
})

