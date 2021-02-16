/* 
    Find Repeated elements between ordered arrays
    
    Iterative function have n + m time complexity, 
    where n and m are the arr1 and arr2 lengths.
*/

arr1 = [1,3,5,7,10]
arr2 = [2,3,6,8,10,20]


const findRepeat = (arr1,arr2)=>{
    let out = []
    let i = 0
    let j = 0
    while (i < arr1.length && j < arr2.length){
        if(arr1[i]>arr2[j]){
            j++
        }
        else if(arr2[j]>arr1[i]){
            i++
        }
        else{
            out.push(arr1[i])
            i++
            j++
        }
    }
    return(out)
}
    

console.log(findRepeat(arr1, arr2))