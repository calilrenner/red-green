export type PasswordValidatorReturn = {
    result: boolean;
    errors: string[]
}

export function passwordValidator(password: string): PasswordValidatorReturn {
    const errorsArray = [];

    if (password.length < 5 || password.length > 15) {
        errorsArray.push('passwordInvalidLength')        
    }

    if (!/\d/.test(password)) {
        errorsArray.push('passwordMustHaveAtLeastOneDigit')        
    }

    if (!/[A-Z]/.test(password)) {
        errorsArray.push('passwordMustHaveAtLeastOneUpperCaseLetter')      
    }

    return {result: errorsArray.length === 0, errors: errorsArray}
} 