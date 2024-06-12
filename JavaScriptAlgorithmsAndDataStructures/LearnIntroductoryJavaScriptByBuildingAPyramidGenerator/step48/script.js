// Step 48
// To see the result of calling your padRow function, declare a call variable and assign your existing padRow call to that variable.

const character = '#';
const count = 8;
const rows = [];

function padRow() {}
const call = padRow();

for (let i = 0; i < count; i = i + 1) {
    rows.push(character.repeat(i + 1));
}

let result = '';

for (const row of rows) {
    result = result + '\n' + row;
}

console.log(result);
