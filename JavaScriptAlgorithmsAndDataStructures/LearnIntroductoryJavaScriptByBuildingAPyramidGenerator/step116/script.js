// Step 116
// Remove all comments, both single- and multi-line, from your code.

const character = '#';
const count = 8;
const rows = [];
let inverted = true;

function padRow(rowNumber, rowCount) {
    return (
        ' '.repeat(rowCount - rowNumber) +
        character.repeat(2 * rowNumber - 1) +
        ' '.repeat(rowCount - rowNumber)
    );
}

let result = '';

for (const row of rows) {
    result = result + '\n' + row;
}

console.log(result);
