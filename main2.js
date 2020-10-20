

function fusion(arr1,arr2){
  for(let i of arr2){
    arr1.push(i);
  }
  return arr1;
}

function compositeMerge(array) {
  console.log("largo: ",array.length);
  if(array.length<=1){
    return array;
  }
  let pivot=(array.length-(array.length%2))/2;
  let left=[array[pivot]];
  let right=[];
  for(let i=0;i<array.length;i++){
    if(i==pivot){
      continue;
    }
    else if(array[i]<array[pivot]){
      left.push(array[i]);
    }
    else if(array[i]>=array[pivot]){
      right.push(array[i]);
    }
  }
  console.log("left: ",left,", rigth: ",right);
  return [...compositeMerge(left),...compositeMerge(right)];
}

function mergeSort(array) {
  console.log("largo: ",array.length);
  if(array.length<=1){
    return array;
  }
  let pivot=(array.length-(array.length%2))/2;
  let left=array.slice(0,pivot);
  let right=array.slice(pivot);
  console.log("left: ",left,", rigth: ",right);
  return merge(mergeSort(left),mergeSort(right));
}

function merge(left,right){
  let mergeArr=[];
  let p1=0;
  let p2=0;
  while(p1<left.length && p2<right.length){
    if(left[p1]<right[p2]){
      mergeArr.push(left[p1]);
      p1++;
    }
    else{
      mergeArr.push(right[p2]);
      p2++;
    }
  }
  return([...mergeArr,...left.slice(p1),...right.slice(p2)]);
}

var arr1=[1,2,3];
var arr2=[4,5,6];
var arr3=[2,5,4,7,8,3,4,6,9,1,4];
var arr4=[2,6,3,7,9,2,3,5,8,1,2];
console.log(mergeSort(arr4));




//Árbol de búsqueda Binario//////////////////////////////////////////////////////////////////////////////////////////////////////
valores=[];

function BinarySearchTree(value) {
  this.value=value;
  this.left=null;
  this.right=null;
}

BinarySearchTree.prototype.insert=function(value){
  child=new BinarySearchTree(value);
  if (this.value!=null){
    if(value<this.value){
      if(this.left==null){
        this.left=child;
      }
      else{
        this.left.insert(value);
      }
    }
    else{
      if(this.right==null){
        this.right=child;
      }
      else{
        this.right.insert(value);
      }
    }
  }
}

BinarySearchTree.prototype.size=function(){
    if(this.left==null && this.right==null){
      return(1)
    }
    else{
      if(this.left==null){
        return(1+this.right.size());
      }
      else if(this.right==null){
        return(1+this.left.size())
      }
      else{
        return(1+this.left.size()+this.right.size())
      }
    }
}

BinarySearchTree.prototype.contains=function(value){
  if(this.value!=null){
    if(value==this.value){
      return(true);
    }
    if(value<this.value && this.left!=null){
      return this.left.contains(value);
    }
    else if(value>this.value && this.right!=null){
      return this.right.contains(value);
    }
  }
  return(false);
}

BinarySearchTree.prototype.inOrderFor=function(cb){
  if(this.value!=null){
    if(this.left!=null){
      this.left.inOrderFor(cb)
    }
    cb(this.value);
    if(this.right!=null){
      this.right.inOrderFor(cb)
    }
  }
}

BinarySearchTree.prototype.breadthFirstForEach=function(cb){
  let out=[];
  out.push(this.value);
  let index=0;
  let medium=[];
  this.piramide(cbAux);
  let current=this.value;
  while(true){
    let cont=0;
    for(let j=index;j<out.length;j++){
      for(let i=0;i<valores.length;i++){
        if(valores[i][0]==out[j]){
          if(valores[i][1]!=null){
            out.push(valores[i][1].value);
            index++;
            cont++;
          }
          if(valores[i][2]!=null){
            out.push(valores[i][2].value);
            index++;
            cont++;
          }
        }
      }
    }
    if(index==valores.length-1){
      for(let i=0;i<out.length;i++){
        cb(out[i]);
      }
      break;
    }
  }
}

BinarySearchTree.prototype.piramide=function(cbAux){
    if(this.value!=null){
      if(this.left!=null){
        this.left.piramide(cbAux);
      }
      if(this.right!=null){
        this.right.piramide(cbAux);
      }
      let val=this.value;
      let izq=this.left;
      let der=this.right;
      let arreglo=[val,izq,der];
      cbAux(arreglo);
    }
}

function cbAux(x){
  valores.push(x);
  return(x);
}


function cb(x){
  console.log(x);
}



tree= new BinarySearchTree(20);
tree.insert(12);
tree.insert(22);
tree.insert(17);
tree.insert(5);
tree.insert(23);
tree.insert(32);
tree.insert(40);
tree.insert(28);
tree.insert(39);
tree.insert(6);

function factorear(num) {
  let arr=[];
  let i=0;
  while(num>1){
    if(num%i==0 && isPrimo(i)){
      console.log(i);
      num=num/i;
      arr.push(i);
    }
    else{
      i=i+1;
      }
    }
  return(arr);
}

function isPrimo(x){
  if(x<=1){
    return(false);
  }
  for(let i=2;i<x;i++){
    if(x%i==0){
      return(false);
    }
  }
  return(true);
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  while(true){
    let contador=0;
    for(let i=0;i<array.length-1;i++){
      if(array[i+1]<array[i]){
        let aux1=array[i+1];
        let aux2=array[i];
        array[i]=aux1;
        array[i+1]=aux2;
        contador=contador+1;
      }
    }
    if(contador==0){
      break;
    }
  }
  return(array);
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  console.log(array);
  while (true){
    let c=0;
    let x=0;
    let y=0;
    for(let i=0;i<array.length-1;i++){//define el elemento desordenado y lo extrae
      if(array[i+1]<array[i]){
        x=array[i+1];
        y=array[i];
        array.splice(i,2,y);
        c=c+1;
        break;
      }
    }
    if(c==0){
      break;
    }
    for(let i=0;i<array.length-1;i++){//inserta el elemento en la posición correcta
      if(x<=array[i]){
        array.splice(i,0,x);
        break;
      }
    }

    console.log(c);
    console.log(x);
    console.log(array);
  }
  return(array);
}

var array=[10,10,12,16];
