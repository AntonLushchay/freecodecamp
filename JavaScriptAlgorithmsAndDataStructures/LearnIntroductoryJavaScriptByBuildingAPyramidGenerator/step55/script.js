// Step 55
// Returning a value from a function brings that value into the scope where the function was called. To bring your "Testing" value from the padRow function into the global scope, update your return statement to return only the test variable.

const character = '#';
const count = 8;
const rows = [];

function padRow(name) {
    const test = 'Testing';
    return test;
}

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
