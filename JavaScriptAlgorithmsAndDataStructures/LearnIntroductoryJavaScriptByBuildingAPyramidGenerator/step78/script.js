// Step 78
// Add an else block to the else if block. Inside the else block, log the string "This is the else block" to the console.

// To see the results in the console, you can manually change the < in the else if statement to >. That will make the condition false and the else block will run.

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

if ('') {
    console.log('Condition is true');
} else if (5 < 10) {
    console.log('5 is less than 10');
} else {
    console.log('This is the else block');
}

let result = '';

for (const row of rows) {
    result = result + '\n' + row;
}

console.log(result);
