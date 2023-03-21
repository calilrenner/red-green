export function passwordValidator(password: string) {
    if (password.length <= 4) {
        return {result: false, errors: ['passwordInvalidLength']}        
    }

    return {result: true, errors: []}
} 