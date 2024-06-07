// Step 51
// Pass your own name as the argument for the name parameter in your padRow call. Remember that your name is a string, so you'll need to use quotes.

const character = '#';
const count = 8;
const rows = [];

function padRow(name) {
    return name;
}
const call = padRow('Brachistochrone');
console.log(call);

for (let i = 0; i < count; i = i + 1) {
    rows.push(character.repeat(i + 1));
}

let result = '';

for (const row of rows) {
    result = result + '\n' + row;
}

console.log(result);
