/* 
    Problem description:

    - There is an ordered positive integers array
    - You need a function that find possible subsets of this array, in wich the sum
      of their elements is equal to a value given as argument
    - array not support repeated elements
    - if the parameter of the function is zero, {} (empty set) is a solution, then
      function must return 1 
*/

const arr = [2, 4, 6, 10, 16] //try to change arr values
const value = 16 //try to change target value

// {2, 4, 10}, {6, 10} ==> output = 2

// Memoized solution
const subsets = (arr, value, index=0, sum = 0, memo=[])=>{
    if (sum === value){
        console.log(memo)
        return 1
    }
    else if (sum > value || index>arr.length-1){
        return 0
    }
    let current = arr[index]
    let newMemo = [...memo, current]
    let exclude = subsets(arr, value, index+1, sum = sum, memo)
    let include = subsets(arr, value, index+1, sum + current, newMemo)
    return include + exclude
}

console.log(subsets(arr, value))