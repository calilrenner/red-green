import { passwordValidator } from './index'

describe('password validator', () => {
    describe('valid password', () => {
        it(`should return an object with the following properties:
        - result: boolean;
        - errors: []
        `, () => {
            expect(passwordValidator('abc123')).toStrictEqual({result: true, errors: []})
        })
    })
})

