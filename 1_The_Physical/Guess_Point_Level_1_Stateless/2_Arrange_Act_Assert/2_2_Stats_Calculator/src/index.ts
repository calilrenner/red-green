export class FibonacciGenerator {
  static getNumber(position: number) {
    if (position < 0) {
      throw new Error('Position should be zero or a positive integer');
    }
    if (position === 0) return 0;
    if (position === 1) return 1;

    let a = 0;
    let b = 1;

    for (let i = 2; i <= position; i++) {
      const temp = a + b;
      a = b;
      b = temp;
    }

    return b;
  }
}
