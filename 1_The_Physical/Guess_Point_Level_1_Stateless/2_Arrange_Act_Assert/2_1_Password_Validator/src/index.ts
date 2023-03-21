export function passwordValidator(password: string) {
    if (password.length < 5 || password.length > 15) {
        return {result: false, errors: ['passwordInvalidLength']}        
    }

    return {result: true, errors: []}
} 