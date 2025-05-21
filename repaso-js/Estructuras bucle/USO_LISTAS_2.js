const num1=parseInt(prompt("Escriba un número entero: "))
const num2=parseInt(prompt("Escriba otro número entero: "))

// Pedira los numeros y estos se mostraran en la consola


if(num1>num2){
    for(let i=num1-1;i>num2;i--){
        console.log(i)
    }
}else{
    for(let i=num1+1;i <num2;i++){
        console.log(i)
    }
}
