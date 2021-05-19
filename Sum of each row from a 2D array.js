//Sum of each row from a 2D array and print in a single row

const readline = require('readline');
const inp = readline.createInterface({input: process.stdin});
const userInput = [];
inp.on("line", (data) => {userInput.push(data);});
inp.on("close", () => 
{
let A = userInput[0].split(" ");
let B = userInput[1].split(" ");
let row = A.length;
let row1 = B.length;
let sumrow = 0;
let sumrow1 = 0;
let output = [];
function sumarry()
{
for (var i=0; i<row; i++)
{
   sumrow = sumrow + parseInt(A[i]);
}

for (var j=0; j<row1; j++)
{
   sumrow1 = sumrow1 + parseInt(B[j]);
}
output.push(sumrow);
output.push(sumrow1);
}
sumarry();

console.log(output.join(" "));

});
