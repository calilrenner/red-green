export class PasswordValidator {
    static validate(password: string) {
        if (password.length < 5) {
            return {
                result: false,
                errors: [
                    { type: 'Invalid length', message: 'Password must be within 5 to 15 characters long' },
                ]
            }
        } else {
            return {
                result: true,
                errors: []
            };
        }
    }
}