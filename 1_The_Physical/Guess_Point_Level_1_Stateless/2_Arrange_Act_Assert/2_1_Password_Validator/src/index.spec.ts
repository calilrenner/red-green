
describe('password validator', () => {
    let returnObject = {
        result: false,
        errors: [
            { type: 'Invalid length', message: 'Password must be within 5 to 15 characters long' },
        ]
    }

    it('should return an object containing result:false and an array specifying the invalid length error', () => {
    //assert
    expect(returnObject.result).toBe(false);
    expect(returnObject.errors.length).toBe(1)
    expect(returnObject.errors[0].message).toBe('Password must be within 5 to 15 characters long')
    })
})

