const lista=document.querySelectorAll(".elemento")
const boton=document.querySelector(".boton")
const elementos=document.querySelector(".elemento2")

boton.addEventListener("click",function(){
    const nuevo_li=document.createElement("li")
    elementos.parentNode.insertBefore(nuevo_li,elementos.nextSibling)

})