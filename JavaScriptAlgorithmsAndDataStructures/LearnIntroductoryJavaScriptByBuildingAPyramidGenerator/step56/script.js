// Step 56
//  Update your padRow function to return the value of concatenating your character variable to the beginning of the name parameter.

const character = '#';
const count = 8;
const rows = [];

function padRow(name) {
    return character + name;
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
