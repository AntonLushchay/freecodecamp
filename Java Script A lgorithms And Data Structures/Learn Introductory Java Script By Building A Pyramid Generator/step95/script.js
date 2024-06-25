// Step 95
// you'll need to replace done here with rows.length + 1
// You'll need to change the while condition to use the less than operator, instead of the less than or equal operator.

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

let done = 0;

while (rows.length < count) {
    done++;
    rows.push(padRow(rows.length + 1, count));
}

let result = '';

for (const row of rows) {
    result = result + '\n' + row;
}

console.log(result);
