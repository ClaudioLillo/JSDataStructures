class Draw {
    constructor (width, height, id){
        this.height = height
        this.width = width
        this.id = id
    }
}

Draw.prototype.init = function(background){
    let container = document.getElementById(this.id)
    if(container){
        console.log(container)
    }
    container.style.width = (this.width).toString() + "px"
    container.style.height = this.height+"px"
    container.style.backgroundColor= background
}

Draw.prototype.circle = function(x, y, r){
    let circle = document.createElement("div")
    circle.style.width = r + "px"
    circle.style.height = r + "px"
    circle.style.backgroundColor = "black"
    circle.style.borderRadius = "50%"
    circle.style.position = "absolute"
    circle.style.left = x - r/2 + "px"
    circle.style.top = y - r/2+ "px"
    container =  document.getElementById(this.id)
    container.appendChild(circle)
}

Draw.prototype.rectangle = function(x, y, a, b){
    let rect = document.createElement("div")
    rect.style.width = a + "px"
    rect.style.height = b + "px"
    rect.style.border = "1px solid rgba(0,0,0,1)"
    rect.style.position = "absolute"
    rect.style.left = x + "px"
    rect.style.top = y + "px"
    container =  document.getElementById(this.id)
    container.appendChild(rect)
    
}

Draw.prototype.line = function(x1, y1, x2, y2, options ){
    let m
    if(x2!==x1){
        m = (y2 -y1)/(x2-x1)
    }
    else{
        m = (x2 -x1)/(y2-y1)
    }
    
    let points = []
    let i = x1
    let j = y1
    if(x2!==x1){
        while (i < x2){
            i++
            j = j + m
            points.push([i,Math.floor(j)])
            
        }
    }
    else{
        while (j < y2){
            j++
            i = i + m
            points.push([i,Math.floor(j)])
            
        }
    }
    
    container = document.getElementById(this.id)
    points.map((point)=>{
        let p = document.createElement("div")
        p.style.width = (options?options.stroke:1) + "px"
        p.style.height = (options?options.stroke:1) + "px"
        p.style.border = "0px"
        p.style.backgroundColor= "black"
        p.style.position = "absolute"
        p.style.left = point[0]
        p.style.top = point[1]
        container.appendChild(p)
    })
}

Draw.prototype.graph = function(x, y, cb, options){
    const {xaxis, yaxis, x_scale, stroke} = options 
    this.line(x, y - yaxis, x, y)
    this.line(x, y, x + xaxis, y)
    for (let i = 0; i<100; i++){
        console.log("x :", i, "| y: ", cb(i))
        this.circle(x_scale*i+x, y - cb(i), stroke)
    }
}


const draw = new Draw(800,500, "root")
draw.init("rgba(0,0,0,0.1)")

const pow2 = (x) =>{
    return (x*x)
}
draw.graph(200,300,pow2, {xaxis: 300, yaxis: 200, x_scale: 20, y_scale: 10, stroke: 3})



