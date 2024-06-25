// Step 72
// Update your iterator to start at 1 instead of 0.

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

for (let i = 1; i < count; i++) {
    rows.push(padRow(i + 1, count));
}

let result = '';

for (const row of rows) {
    result = result + '\n' + row;
}

console.log(result);
