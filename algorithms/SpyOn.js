const adder =(a,b)=>{
    console.log(a+b)
    return(a+b)
}

function SpyOn(cb){
    let count = 0
    let wasCalled = new Set()
    let returnedSet = new Set()
    
    const spy = (...args)=>{
        console.log("args: ",args)
        for (let i of args){
            wasCalled.add(i)  
        }
        count++
        returnedSet.add(cb(...args))
        return(cb)
    }
    spy.getCallCount = ()=>{
        console.log(count)
        return count
    }
    spy.wasCalledWith = (val)=>{
        console.log(wasCalled.has(val))
        return wasCalled.has(val)
    }
    spy.returned = (val)=>{
        console.log(returnedSet.has(val))
        return returnedSet.has(val)
    }
    return(spy) 
}

const adderSpy = new SpyOn(adder)

adderSpy(2,3)
adderSpy.wasCalledWith(2)
adderSpy.returned(5)
adderSpy.getCallCount()

adderSpy(5,7)
adderSpy.wasCalledWith(8)
adderSpy.returned(12)
adderSpy.getCallCount()

