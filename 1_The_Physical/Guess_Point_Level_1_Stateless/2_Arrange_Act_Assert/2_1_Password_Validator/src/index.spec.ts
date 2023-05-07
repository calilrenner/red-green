import { PasswordValidator } from './index';

describe('password validator', () => {
    describe('invalid passwords', () => {   
        it('should return an object containing result:false and an array specifying the invalid length error', () => {
                //arrange
                const password = 'A234';

                //act
                const returnObject = PasswordValidator.validate(password);

                //assert
                expect(returnObject.result).toBe(false);
                expect(returnObject.errors.length).toBe(1)
                expect(returnObject.errors[0].message).toBe('Password must be within 5 to 15 characters long')
                expect(returnObject.errors[0].type).toBe('Invalid length')
        })
        
        it('should return an object containing result:false and an array specifying the digit missing error', () => {
                //arrange
                const password = 'Abcdefghij';

                //act
                const returnObject = PasswordValidator.validate(password);

                //assert
                expect(returnObject.result).toBe(false);
                expect(returnObject.errors.length).toBe(1)
                expect(returnObject.errors[0].message).toBe('Password must have at least 1 digit')
                expect(returnObject.errors[0].type).toBe('Digit missing')
        })

        it('should return an object containing result:false and an array specifying the uppercase letter missing error', () => {
                //arrange
                const password = 'abcdefghij1';

                //act
                const returnObject = PasswordValidator.validate(password);

                //assert
                expect(returnObject.result).toBe(false);
                expect(returnObject.errors.length).toBe(1)
                expect(returnObject.errors[0].message).toBe('Password must have at least 1 uppercase letter')
                expect(returnObject.errors[0].type).toBe('Uppercase letter missing')
        })

        it(`should return an object containing result:false and an array specifying all password errors:`, () => {
                //arrange
                const password = 'abc';

                //act
                const returnObject = PasswordValidator.validate(password);

                //assert
                expect(returnObject.result).toBe(false);
                expect(returnObject.errors.length).toBe(3)
                expect(returnObject.errors[0].message).toBe('Password must be within 5 to 15 characters long')
                expect(returnObject.errors[0].type).toBe('Invalid length')
                expect(returnObject.errors[1].message).toBe('Password must have at least 1 digit')
                expect(returnObject.errors[1].type).toBe('Digit missing')
                expect(returnObject.errors[2].message).toBe('Password must have at least 1 uppercase letter')
                expect(returnObject.errors[2].type).toBe('Uppercase letter missing')
        })
    })
})

