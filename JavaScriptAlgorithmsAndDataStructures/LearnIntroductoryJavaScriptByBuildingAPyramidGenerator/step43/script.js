// Step 43
// add 1 to the value of i in your .repeat() call. Do not assign it back to i like you did in your loop conditions.

const character = '#';
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
    rows.push(character.repeat(i + 1));
}

let result = '';

for (const row of rows) {
    result = result + '\n' + row;
}

console.log(result);
