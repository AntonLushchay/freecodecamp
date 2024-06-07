// Step 58
// As expected, your function now returns undefined again. Your call variable is not necessary any more, so remove the call declaration and the console.log for the call variable.

const character = '#';
const count = 8;
const rows = [];

function padRow() {}

for (let i = 0; i < count; i = i + 1) {
    rows.push(character.repeat(i + 1));
}

let result = '';

for (const row of rows) {
    result = result + '\n' + row;
}

console.log(result);
