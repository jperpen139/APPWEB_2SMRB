const boton=document.querySelector(".boton")

const lista=document.querySelector(".lista")
boton.addEventListener("click",function(){
    const li= document.createElement("li")
    lista.appendChild(li)
    li.textContent="elemento nuevo"
})