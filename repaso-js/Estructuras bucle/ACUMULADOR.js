const num_pos=parseInt(prompt("Escriba un numero entero positivo: "))


let lista_sum=[]

if(num_pos<=0){
    alert("Le he pedido un numero entero positivo")
}else{
    const num_may=parseInt(prompt("Escriba un numero mayor que "+ num_pos+" :"))
    if(num_may<=num_pos){
        alert("Le he pedido un numero entreo mayor que"+ num_pos+":")
    }else{
        for(let i=num_pos;i>num_may;i=i+num_pos){
           lista_sum=lista_sum+i
        }
        alert("La suma desde "+num_pos+" hasta "+num_may+ " es"+ lista_sum)
    }
}