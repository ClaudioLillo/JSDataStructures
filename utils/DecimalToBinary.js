const DecToBin=(num)=>num<2?num.toString():(num%2).toString() + DecToBin(Math.floor(num/2))

//La solucion recursiva siempre ocupa más espacio porque declara varias veces la función

