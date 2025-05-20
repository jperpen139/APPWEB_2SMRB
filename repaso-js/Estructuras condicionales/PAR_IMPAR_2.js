const num_par=parseInt(prompt("Escriba un numero par: "))

if (num_par %2 !=0){
    alert("No ha escrito un numero par")
}else if(num_par%2 ==0){
    const num_impar=parseInt(prompt("Escriba un numero impar: "))
}else if (num_impar%2 !=1){
    alert("No ha escrito un numero impar")
}else if(num_impar%2 !=0){
    alert("Gracias por su colaboracion")
}

