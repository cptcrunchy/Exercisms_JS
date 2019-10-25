export const steps = (n, count = 0) => {
    if (n < 1) throw "Only positive numbers are allowed"
    if (n === 1) return count
    return (n % 2 === 0) ? 1 + steps(n / 2) : 1 + steps(n * 3 + 1);
}