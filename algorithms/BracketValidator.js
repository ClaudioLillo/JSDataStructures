function bracketValidator(string){
    console.log("string: ",string)
    if(string.length===0){
        return(true)
    }
    let arr = [
        ['{','}'],
        ['[',']'],
        ['(',')']
    ]
    for(let i=0;i<string.length-1;i++){
        for(let j of arr){
            if(string[i]===j[0] && string[i+1]===j[1]){
                let newString = string.slice(0,i)+string.slice(i+2)
                return(bracketValidator(newString))
            }
        }
    }
    return(false)
}

console.log(bracketValidator('{}({[{}{]}{}][])}'))

n + (n-2) + (n - 4) + (n-6)