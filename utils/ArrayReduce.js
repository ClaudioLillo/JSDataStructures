

let arr = [4,11,2,[5,8],7,[7,8,[1,2,[3,4]]]]

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
 

