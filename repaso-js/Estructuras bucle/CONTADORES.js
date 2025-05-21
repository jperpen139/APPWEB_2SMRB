const num=parseInt(prompt("¿Cuantos valores va a introducir? "))

let list_neg=[]

if(num<0){
    alert("¡Imposible!")
}else if(num ==0){
    alert("No ha escrito un número negativo")
}else{
    for(let i=0;i<num;i++){
        const num2=parseInt(prompt("Escriba el numero "+ (i+1)))
        if(num2<0){
            list_neg++;
            alert("Ha escrito "+list_neg +" numeros negativos")
        }
    }
}



