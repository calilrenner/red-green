export function palindromeChecker(check: string): boolean {
    const checkNormalized = check.replace(/\s/g, '').toLowerCase();
    const reversedCheck = checkNormalized.split('').reverse().join('')

    return checkNormalized === reversedCheck;
}