class Node{
    constructor(data){
        this.data = data
        this.next= null
    }
}

class Stack{
    constructor(){
      this.largo = 0
      this.head = null
    }
}

Stack.prototype.push = function(data){
    let node = new Node(data)
    let current=this.head
    if(!current){
        this.head=node
        this.largo++
        return
    }
    while(current.next){
        current=current.next
    }
    current.next=node
    this.largo++
}

Stack.prototype.pop = function(){
    let current=this.head
    let previous=null
    if(!current){
        return(false)
    }
    while(current.next){
        previous=current
        current=current.next
    }
    this.largo--
    previous.next=null
    return(current.data)
}

Stack.prototype.min = function(){
    let current = this.head
    if(!current){
        console.log("empty stack")
        return(false)
    }
    let min=this.head.data
    while(current.next){
        if(current.data<min){
            min=current.data
        }
        current=current.next
    }
    // if(current.data<min){
    //     min=current.data
    // }
    return(min)
}

Stack.prototype.display= function(){
    let elStack=""
    let current=this.head
    if(!current){
       elStack+="vacio"
    }
    while(current.next){
        elStack+="-->"+(current.data).toString()
        current=current.next
    }
    elStack+="-->"+(current.data).toString()
    return(elStack)
}

let stack = new Stack();
console.log("agrego 8, 11 y 4")
stack.push(8)
stack.push(11)
stack.push(4)

console.log(stack.display())

console.log("pop: ",stack.pop())
console.log(stack.display())
console.log("pop: ",stack.pop())
console.log(stack.display())

console.log("agrego 8, 11 y 4")
stack.push(8)
stack.push(11)
stack.push(4)
console.log(stack.display())

console.log("min: ",stack.min())

console.log("agrego 13, 18, 2 y 35")
stack.push(13)
stack.push(18)
stack.push(2)
stack.push(35)

console.log(stack.display())
console.log("min: ",stack.min())


/////////////////////////////////////////////

grafo = {
    'a':['b','c'],
    'b':['d','e'],
    'c':['d'],
    'e':['a'],
}

existeElCamino(grafo,partida,final)


