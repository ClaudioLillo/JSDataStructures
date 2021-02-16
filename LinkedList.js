/* Linked Lists / Listas enlazadas */

class Node{
  constructor(data){
    this.data=data;
    this.next=null;
  }
}

class List{
  constructor(){
    this.len = null;
    this.head = null;
  }
}

List.prototype.add = function(data){
  node= new Node(data);
  current=this.head;
  if(!current){
    this.head=node;
    this.len= 1;
    return(node);
  }
  while(current.next){
    current=current.next;
  }
  current.next=node;
  this.len=this.len+1
  console.log(this.len)
  return(node);
}

List.prototype.remove = function(){
  
  let current=this.head;
  let previus;
  if(!current){
    return null;
  }
  if(this.len===1){
    this.head=null;
    return(current.data);
  }
  while(current.next){
    previus=current;
    current=current.next;
  }
  previus.next=null;
  this.len--;
  return(current.data);
}

List.prototype.print = function(){
  let current=this.head;
  let out="";
  if(!current){
    return("null → X");
  }
  while(current){
    out+=current.data+" → ";
    current=current.next;
  }
  out+="X"
  return(out);
}

const list = new List();

/* Code for User Interface */
let dataToAdd=null
var linkedList = document.getElementById("linkedList")

const setData=(a)=>{
  dataToAdd=a
  print()
}

function addToList(){
  list.add(dataToAdd)
  print()
}
function removeFromList(){
  list.remove()
  print()
}

function print(){
  linkedList.innerHTML=list.print()
}

print()





