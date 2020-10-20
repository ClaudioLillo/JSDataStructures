displaySteps=[] //array to colect steps

function quickSort(array) {
    if(array.length<=1){
      return array;
    }
    let arr=[];
    let left=[];
    let right=[];
    let pivot=0;
    arr.push(array[pivot]);
    for(let i=0;i<array.length;i++){
      if(i==pivot){
        continue;
      }
      if(array[i]<array[pivot]){
        left.push(array[i]);
      }
      else if(array[i]>=array[pivot]){
        right.push(array[i]);
      }
    }
    displaySteps.push([left,arr,right]) //line to display steps
    return [...quickSort(left),...arr,...quickSort(right)];
  
  }

  const clearSteps=()=>{
      displaySteps=[]
  }

  /* User Interface */

  arr = []

  function addToArray(event){
      event.preventDefault()
      arr.push(parseInt(event.target[0].value))
      console.log(arr)
  }