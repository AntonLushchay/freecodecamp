// Use a second addition operator to concatenate a new line between the existing result value and the added row value.

const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
  rows.push(i);
}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}
console.log(result)