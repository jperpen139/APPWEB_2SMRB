

const boton= document.querySelector(".boton")


boton.addEventListener("click",function(){
    let introduccion = document.querySelector(".introducir")
    const parrafo=document.querySelector(".parrafo")

    parrafo.textContent= introduccion.value
    // if(introduccion.value !=null)
        
}) 