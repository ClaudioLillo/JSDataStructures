

const clockMinuteAdder = (hora,minutos) =>{
    let data = hora.split(":")
    let min = data[0]*60 + parseInt(data[1]) + minutos
    let newHora =((Math.floor(min/60))%12)
    if(newHora!==0){
        return newHora+":"+min%60
    }
    return 12+":"+min%60
}



console.log(clockMinuteAdder("11:45",15))
console.log(clockMinuteAdder("09:45",15))
console.log(clockMinuteAdder("12:30",150))