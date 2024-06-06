// Step 44
// Declare a padRow function. Do not create any parameter variables yet. The function body should be empty. Remember that you need to use camel case for your naming convention.

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
