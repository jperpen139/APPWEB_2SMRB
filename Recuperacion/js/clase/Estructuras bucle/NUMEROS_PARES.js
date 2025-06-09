const num_par=parseInt(prompt("Escriba un número par: "))

let list_par=[]
let seguir=true
while(seguir){
    if(num_par%2 !=0){
        num_par=parseInt(prompt(num_par+" no es par. Intentelo de nuevo: "))
    }else{
        list_par++
        const quest= prompt("¿Quiere escribir otro numero par? (S/N): ")
        if(quest=="n"){
            seguir=false
        }else{
            const num_par=parseInt(prompt("Escriba un número par: "))
        }
    }
}
if(list_par==1){
    alert("Ha escrito un numero par")
}else{
    alert("Ha escrito "+list_par+" numeros pares")
}