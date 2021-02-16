/*
Memoization algorithm for Fibonacci. 

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
f(0) = 0
f(1) = 1
f(2) = 1 = 1 + 0
f(3) = 2 = 1 + 1
f(4) = 3 = 2 + 1
f(5) = 3 + 2 = 5
*/
let recTime = 0 // time complexity for recursive
let memoTime = 0 // time complexity for memoization

// Recursive function
const recFib = (n)=>{
    recTime++
    if (n <= 0){ return 0}
    else if (n === 1){ return 1}
    return recFib(n-2) + recFib(n-1)
}

// Memoization function
const memoFib = (n, memo = {0: 0, 1: 1})=>{
    for(let i=0; i<n+1; i++){
        memoTime++
        if(!memo.hasOwnProperty(i)){
            memo[i] = memo[i-1]+memo[i-2]
        }
    }
    return memo[n]
}

const compareCompexity = (n)=>{
    console.log("recursive method result: ", recFib(n))
    console.log("memoization method result: ", memoFib(n))
    console.log("Time Compexity rec vs memo: ", recTime+" | "+memoTime)
}

compareCompexity(30) //change n value to compare time complexity
