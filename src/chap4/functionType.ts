type F = (repertN: number) => string;
const xRepeat: F = (n: number): string => "x".repeat(n);
console.log(xRepeat(6));