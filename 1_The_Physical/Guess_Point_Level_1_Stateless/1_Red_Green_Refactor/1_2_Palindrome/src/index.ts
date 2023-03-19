export function palindromeChecker(str: string): boolean {
    const originalStrSanitized = str.replace(/\s/g, '').toLowerCase();
    let sortedString = '';

    for (let i = originalStrSanitized.length - 1; i >= 0; i--) {
        sortedString += originalStrSanitized[i];
    }

    if (originalStrSanitized === sortedString) return true;

    return false
}