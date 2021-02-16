/* 
    binToDec function receives a string containing a binary number and return the number
    on the decimal format
*/
const binToDec= (string)=>{
    let exp=0
    let out=0
    for(let i=string.length-1;i>-1;i--){
        if(string[i]==="1"){
            out+=Math.pow(2,exp)
        }
        exp++
    }
    return(out)
}



