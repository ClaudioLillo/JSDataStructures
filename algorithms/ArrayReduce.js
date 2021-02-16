/*
    Array reduce function can resolve the sum of values 
    stored in an array, and arrays nested in arrays.
*/

let arr = [4,11,2,[5,8],7,[7,8,[1,2,[3,4]]]]

// function must return 4 + 11 + 2 + 5 + 8 + 7 + 7 + 8 +1 + 2 + 3 + 4 = 62

function sum (arr){
    let aux = 0
    for(let i of arr){
        if(typeof(i)==="object"){
            aux +=sum(i)
        }
        else{
            aux += i
        }
    }
    return(aux)
}

console.log(sum(arr))
 

