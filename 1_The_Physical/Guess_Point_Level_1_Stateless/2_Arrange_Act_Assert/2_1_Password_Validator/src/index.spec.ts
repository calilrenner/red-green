import { PasswordValidator } from './index';

describe('password validator', () => {
    describe('Should validate password length', () => {        
        it('should return an object containing result:false and an array specifying the invalid length error', () => {
                //arrange
                const password = '1234';

                //act
                const returnObject = PasswordValidator.validate(password);

                //assert
                expect(1).toBe(1)
                expect(returnObject.result).toBe(false);
                expect(returnObject.errors.length).toBe(1)
                expect(returnObject.errors[0].message).toBe('Password must be within 5 to 15 characters long')
                expect(returnObject.errors[0].type).toBe('Invalid length')
            })
    })
})

