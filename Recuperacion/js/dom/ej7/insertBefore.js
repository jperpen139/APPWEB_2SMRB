const lista_ele=document.querySelectorAll(".elemento")
const boton = document.querySelector(".boton")
const elemento = document.querySelector(".elemento")

boton.addEventListener("click",function(){
    const li=document.createElement("li")
    lista_ele.forEach(posicion => {
        posicion.parentNode.insertBefore(li,elemento)
        li.textContent="Nuevo elemento"
    });
})


