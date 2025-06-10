
//selectores
const boton=document.querySelector(".boton")
const contenedor1=document.querySelector(".div")
const contenedor2=document.querySelector(".div2")
const parrafo=document.querySelector(".parrafo")

// eventos
boton.addEventListener("click",function(){
    parrafo.parentNode.removeChild(parrafo)
    contenedor2.appendChild(parrafo)
})
