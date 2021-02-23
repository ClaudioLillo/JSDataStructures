/*
    You are a traveler on a 2D grid. You begin in the top-left corner and your
    goal is to reach to the bottom-right corner. You may only move down or rigth

    In how many ways can you travel to the goal on a grid with m x n dimensions?

    Recursive function is a possible but not optimal solution
    Memoization algorithm can reduce the iterations, avoiding repeated cases

*/
let counter1=0
let counter2=0

const ways = (m, n)=>{
    counter1++
    if(m===1 || n===1){
        return 1
    }
    else if(m===2 && n===2){
        return 2
    }

    return ways(m -1,n) + ways(m,n-1)

}

const memoWays = (m, n, memo={})=>{
    counter2++
    const key = m + ',' + n
    const inverse = n + ',' + m
    if (key in memo) {return memo[key]}
    if(inverse in memo) {return memo[inverse]}
    if(m===1 || n===1){
        return 1
    }
    else if(m===2 && n===2){
        return 2
    }

    memo[key] = memoWays(m -1,n, memo) + memoWays(m,n-1, memo)
    return memo[key]

}
console.log("recursive solution: ", ways(6,5))
console.log("memoization solution: ", memoWays(2,5))
console.log("counter 1: ", counter1, "counter2: ", counter2)

