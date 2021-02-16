const arr = [3,4,2,1,10,6,7]


//find the longest crescent sequence in arr





































const findSec=(arr,index=0,obj={},largo=0)=>{
    if(index>arr.length-1){
        return(obj)
    }
    for(let i in obj){
        if(obj[i]<arr[index]){
            obj[i].len=obj[i].len+1 || 1
        }
    }
    obj[arr[index]]=largo
    return(findSec(arr,index+1,obj,largo+1))
}

const res = findSec(arr)

console.log(res['1'])