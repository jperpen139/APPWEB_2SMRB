const num_pos=parseInt(prompt("Escriba  la cantidad de números positivos a escribir: "))



// Varaibles auxiliares
let lista_num=[]
let seguir=true
let list_pos=[]

if(num_pos<0){
    num_pos= parseInt(prompt("Le he pedido un numero mayor que 0.Intentelo de nuevo: "))
}else{
    while(seguir){
        const num1=parseInt(prompt("Escriba un numero: "))
        const num2=parseInt(prompt("Escriba otro numero: "))
        if(num1>0||num2>0){
            list_pos++
            lista_num++
        }else{
            list_num++
        }
        if(list_pos==num_pos){
            seguir=false
        }else{
            seguir=true
        }
        alert("Ha escrito "+lista_num+" numeros "+ list_pos+" de ellos positivos")
    }
}
