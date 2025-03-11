function greet(name) {
    return "Hello, " + name + "!";
}
const square = (n) => {
    return n * n;
};
function main() {
    let x = 3;
    let y = 8;
    console.log("Square of", x, "is", square(x));
    console.log(greet("John"));
}
main();
