// Step 57
// Go ahead and remove the test declaration from your padRow function. Also, remove the return statement, so your function is empty again.

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
