export function palindromeChecker(str: string): boolean {
    const originalStrNormalized = str.replace(/\s/g, '').toLowerCase();
    let reversedString = originalStrNormalized.split('').reverse().join('');

    return originalStrNormalized === reversedString;
}