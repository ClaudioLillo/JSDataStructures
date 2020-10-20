/* Hash Table / Tabla Hash */

function multiDim(largo){
    arr=[];
    for(i=0;i<largo;i++){
      arr[i]=[];
    }
    return arr;
  }
  
  function HashTable(largo){
    this.size=largo;
    this.conteiner=multiDim(largo);
    this.keys=[];
  
  }
  
  HashTable.prototype.set=function(key,value){
    let index=this.hash(key);
    this.conteiner[index].push(value);
    this.keys.push(key);
  }
  
  HashTable.prototype.get=function(key){
    index=this.hash(key);
    if(this.conteiner[index]!=[]){
      let x=this.conteiner[index].pop();
      return x;
    }
    return null;
  
  }
  
  HashTable.prototype.hash=function(key){
    let sum=0;
    if(typeof(key)!='string'){
        throw TypeError('keys must be strings');
    }
    for(i=0;i<key.length;i++){
        sum=sum+key.charCodeAt(i);
      }
    return(sum%(this.size));
  }
  
  HashTable.prototype.display=function(){
    for(i=0;i<this.size;i++){
      console.log(i,":",this.conteiner[i]);
    }
  }

  /* User Interface */

const tabla=new HashTable(13);


let valueToAdd=null
let keyToHash=null

var hashTable = document.getElementById("hashTable")
var usedKeys = document.getElementById("usedKeys")

const handleSubmit=(event)=>{
    event.preventDefault()
    tabla.set(event.target[1].value,event.target[0].value)
    createTable()
    setKeys()

}

const createTable=()=>{
    hashTable.innerHTML=""
    tabla.conteiner.map((value,index)=>{
        let hash = document.createElement("td")
        hash.innerHTML=index
        let val = document.createElement("td")
        val.innerHTML=value.toString()
        let tr = document.createElement("tr")
        tr.appendChild(hash)
        tr.appendChild(val)
        hashTable.appendChild(tr)   
    })
}
const setKeys=()=>{
    usedKeys.innerHTML=""
    tabla.keys.map((value)=>{
        let key = document.createElement("p")
        key.innerHTML= value
        usedKeys.appendChild(key)
    })
}

createTable()
setKeys()