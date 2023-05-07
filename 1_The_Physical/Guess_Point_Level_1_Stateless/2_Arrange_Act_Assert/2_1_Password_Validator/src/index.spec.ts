import { PasswordValidator } from './index';

describe('password validator', () => {
    describe('invalid passwords', () => {   
        it('should return an object containing result:false and an array specifying the invalid length error', () => {
                //arrange
                const password = '1234';

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
                const password = 'abcdefghij';

                //act
                const returnObject = PasswordValidator.validate(password);

                //assert
                expect(returnObject.result).toBe(false);
                expect(returnObject.errors.length).toBe(1)
                expect(returnObject.errors[0].message).toBe('Password must have at least 1 digit')
                expect(returnObject.errors[0].type).toBe('Digit missing')
        })

        it('should return an object containing result:false and an array specifying the upper case letter missing error', () => {
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
    })
})

