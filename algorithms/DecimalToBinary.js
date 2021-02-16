/*
  Decimal to Binary Converter
  input => ouput
  0 = 0
  1 = 1
  2 = 10
  3 = 11
  4 = 100
  5 = 101
  ...
*/

// Recursive function. It uses more space, bacause need to declare variables several times
const recDecToBin=(num)=>{
    if(num < 2){ return num.toString()}
    return recDecToBin(Math.floor(num/2)) + (num%2).toString()
}

console.log(recDecToBin(8))

console.log(DecToBin(8))