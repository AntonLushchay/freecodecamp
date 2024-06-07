// Step 53
// use const to declare a test variable in your padRow function. Initialise it with the value "Testing".

const character = '#';
const count = 8;
const rows = [];

function padRow(name) {
    const test = 'Testing';
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
