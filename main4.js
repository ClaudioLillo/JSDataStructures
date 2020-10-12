var countArray = function(array){
  if(!Array.isArray(array)){
    return array;
  }
  let count=0;
  for(let i=0;i<array.length;i++){
    count=count+countArray(array[i]);
  }
  return count;
}
const array = [1, [2, [3,4]], [5,6], 7];

console.log(countArray(array));
