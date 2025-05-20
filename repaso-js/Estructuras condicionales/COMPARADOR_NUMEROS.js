const num1=parseInt(prompt("Esciba un numero: "))
const num2=parseInt(prompt("Escriba otro número: "))
const num3=parseInt(prompt("Escriba otro número más: "))

if(num1==num2==num3){
    alert("Has escrito tres veces el mismo numero.")
}else if(num1==num2||num1==num3||num2==num3){
    alert("Has escrito unos de los numeros dos veces")
}else{
    alert("Los tres numeros que has escrito son distintos")
}