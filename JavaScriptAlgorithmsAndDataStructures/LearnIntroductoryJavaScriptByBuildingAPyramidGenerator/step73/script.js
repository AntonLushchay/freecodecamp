// Step 73
// Create an if statement with the boolean true as the condition. In the body, print the string "Condition is true".

const character = '#';
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
    return (
        ' '.repeat(rowCount - rowNumber) +
        character.repeat(2 * rowNumber - 1) +
        ' '.repeat(rowCount - rowNumber)
    );
}

// TODO: use a different type of loop
/*for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}*/

if (true) {
    console.log('Condition is true');
}

let result = '';

for (const row of rows) {
    result = result + '\n' + row;
}

console.log(result);
