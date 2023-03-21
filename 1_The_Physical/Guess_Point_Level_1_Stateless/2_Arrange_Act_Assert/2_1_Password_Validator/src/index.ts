export function passwordValidator(password: string) {
    if (password.length < 5 || password.length > 15) {
        return {result: false, errors: ['passwordInvalidLength']}        
    }

    if (!/\d/.test(password)) {
        return {result: false, errors: ['passwordMustHaveAtLeastOneDigit']}        
    }

    if (!/[A-Z]/.test(password)) {
        return {result: false, errors: ['passwordMustHaveAtLeastOneUpperCaseLetter']}        
    }

    return {result: true, errors: []}
} 