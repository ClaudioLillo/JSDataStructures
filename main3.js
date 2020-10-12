function BinarioADecimal(num) {
  var arr=num.split("");
  var exp=arr.length - 1;
  var salida=0;
  for(let i of arr){
	 if (i==1){
		salida=salida+2**exp;
	 }
	 exp--;
  }
  return(salida);
}

function DecimalABinario(num) {
  let i=0;
  while(true){
	  if((2**i>num)){
		  break;
	  }
	  i=i+1;
  }
  salida="";
  while(i>0){
	  if (num>=(2**(i-1))){
		  salida=salida+"1";
		  num=num-(2**(i-1));
	  }
	  else{
		  salida=salida+"0";
	  }
	  i--;
  }
  return(salida);
}

var selectionSort = function(array) {
  let arr=[]
  let index=0;

  while(array.length>0){
    cont=0;
    let min=array[0];
    for(var i=0;i<array.length;i++){

      if(array[i]<=min){
        min=array[i];
        index=i;
        cont=cont+1;
      }
    }
    if(cont>0){
      arr.push(min);
      array.splice(index,1);
      console.log("arr:",arr);
      console.log("array: ",array);
    }
  }
  return(arr);
}


function permutacion(array){
  if(array.length==1){
    return(array);
  }
  return
