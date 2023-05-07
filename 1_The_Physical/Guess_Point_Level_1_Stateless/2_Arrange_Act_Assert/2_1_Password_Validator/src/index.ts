export type PasswordValidationErrors = {
    type: string;
    message: string;
}
export type PasswordValidationReturn = {
    result: boolean;
    errors: PasswordValidationErrors[]
}

export class PasswordValidator {

    static validate(password: string): PasswordValidationReturn {
        const errors: PasswordValidationErrors[] = []
        if (password.length < 5 || password.length > 15) {
            errors.push({ type: 'Invalid length', message: 'Password must be within 5 to 15 characters long' })
        }
        if (!/\d/.test(password)) {
            errors.push({ type: 'Digit missing', message: 'Password must have at least 1 digit' })
        }
        if (!/[A-Z]/.test(password)) {
            errors.push({ type: 'Uppercase letter missing', message: 'Password must have at least 1 uppercase letter' })
        }

        return {
            result: errors.length === 0,
            errors: errors
        };
    }
}