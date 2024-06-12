// Step 54
// Declare a function named addTwoNumbers. This function should take two arguments and return the sum of those two arguments.

// Then declare a sum variable and assign it the value of calling your addTwoNumbers function with 5 and 10 as the arguments. Log the sum variable to the console.

const character = '#';
const count = 8;
const rows = [];

function padRow(name) {
    return name;
}
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}
let sum = addTwoNumbers(5, 10);
console.log(sum);

const call = padRow('CamperChan');
console.log(call);

for (let i = 0; i < count; i = i + 1) {
    rows.push(character.repeat(i + 1));
}

let result = '';

for (const row of rows) {
    result = result + '\n' + row;
}

console.log(result);
