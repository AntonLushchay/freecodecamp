// In your for...of loop, use the addition operator to concatenate the row value to the result value.

const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
  rows.push(i);
}

let result = ""

for (const row of rows) {
  result = result + row
}
console.log(result);