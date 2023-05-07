export class PasswordValidator {
    static validate(password: string) {
        if (password.length < 5) {
            return {
                result: false,
                errors: [
                    { type: 'Invalid length', message: 'Password must be within 5 to 15 characters long' },
                ]
            }
        } else if (!/\d/.test(password)) {
            return {
                result: false,
                errors: [
                    { type: 'Digit missing', message: 'Password must have at least 1 digit' },
                ]
            }
        } else if (!/[A-Z]/.test(password)) {
            return {
                result: false,
                errors: [
                    { type: 'Uppercase letter missing', message: 'Password must have at least 1 uppercase letter' },
                ]
            }
        }
        
        else {
            return {
                result: true,
                errors: []
            };
        }
    }
}