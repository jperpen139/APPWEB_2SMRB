const dividendo=parseInt(prompt("Escriba el dividendo: "))
const divisor=parseInt(prompt("Escriba el divisor: "))

const cociente=dividendo/divisor
const resto=dividendo%divisor

if(divisor==0){
    alert("NO se puede dividir por cero")
}else if(dividendo%divisor !=0){
    alert("La division no es exacta. "+"Cociente: "+cociente+" Resto: "+resto)
}else if(dividendo%divisor ==0){
    alert("La division es exacta. "+"Cociente: "+cociente)
}