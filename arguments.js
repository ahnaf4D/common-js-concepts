function sum(a, b, c) {
    // arguments.push(45);
    const args = [...arguments]; // convert arguments to pure array
    // console.log(args);
    const result = a + b + c;
    return result;
}
// console.log(arguments);
const total = sum(45, 89, 12, 45, 98, 56);
console.log(total);

// Arguments keyword only accessable inside the function
// Arguments in array like object
console.log(sum.length);
// If we use .length property into the function it returns how many parameters recieve function.