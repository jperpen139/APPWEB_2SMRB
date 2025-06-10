const boton=document.querySelector(".boton")
const input=document.querySelector(".tarea")
const lista=document.querySelector(".lista")
const boton2=document.querySelector(".boton2")
const boton3=document.querySelector(".boton3")
const lista_all=document.querySelectorAll("li")
const boton4=document.querySelector(".boton4")
const lista2=document.querySelector(".lista2")


//eventos
boton.addEventListener("click",function(){
    const li= document.createElement("li")
    lista.appendChild(li)
    li.innerHTML= "Producto: "+input.value+"<br>"
    const new_bot=document.createElement("button")
    li.appendChild(new_bot)
    new_bot.textContent="Eliminar"
    new_bot.addEventListener("click",function(){
        li.remove()
    })
    const el_bot=document.createElement("button")
    li.appendChild(el_bot)
    el_bot.textContent="Destacar"
    el_bot.addEventListener("click",function(){
        li.classList.toggle("destacar")
    })
    boton3.addEventListener("click",function(){
    lista_all.forEach((producto,i) => {
        producto.textContent=i
        if(input.value>10){
            input.value.classList.add("negrita")
        }
    })
})
})
boton2.addEventListener("click",function(){
        const new_li= document.createElement("li")
        li.parentNode.insertBefore(new_li,li.nextSibling)
        new_li.innerHTML="Producto: "+input.value+"<br>"
        const new_bot=document.createElement("button")
        new_li.appendChild(new_bot)
        new_bot.textContent="Eliminar"
        new_bot.addEventListener("click",function(){
            new_li.remove()
        })
        const el_bot=document.createElement("button")
        new_li.appendChild(el_bot)
        el_bot.textContent="Destacar"
        el_bot.addEventListener("click",function(){
            new_li.classList.toggle("destacar")
        })
    })
boton3.addEventListener("click",function(){
    lista_all.forEach((producto,i) => {
        producto.textContent=i
        if(input.value>10){
            input.value.classList.add("negrita")
        }
    });
})
boton4.addEventListener("click", function(){
    const destacados=document.querySelectorAll(".destacar")
    
    
    destacados.forEach(producto => {
        producto.parentNode.removeChild(producto)
        destacados.classList.remove(".destacar")
        lista2.appendChild(producto)
    });
    
})
