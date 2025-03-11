function add(a: number, b: number): number {
    return a + b;
}
const multiply = (x: number, y: number): number => {
    return x * y;
};
function main() {
    let num1 = 5;
    let num2 = 10;
    console.log("Sum:", add(num1, num2));
    console.log("Product:", multiply(num1, num2));
}
main();
