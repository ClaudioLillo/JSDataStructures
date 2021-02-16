
const subSet2=(arr,target, index=0, memo=[])=>{
    if(target===0){
        return(memo)
    }
    if(index>arr.length){
        return(false)
    }
    let newMemo = [...memo, arr[index]]
    let res1 = subSet2(arr,target-arr[index],index+1,newMemo)
    let res2 = subSet2(arr,target,index+1,memo)
    return res1 || res2
}

console.log(subSet2([7, 10, 5, 5, 3, 2], 13)) 
console.log(subSet2([7, 10, 5, 5, 3, 2], 41)) 
console.log(subSet2([7, 10, 5, 5, 3, 2], 20)) 
console.log(subSet2([7, 10, 5, 5, 3, 2], 23)) 




