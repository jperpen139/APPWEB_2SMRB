//variable selector 

const boton=document.querySelector(".boton")
const input=document.querySelector(".tarea")
const lista=document.querySelector(".lista")
//funciones
boton.addEventListener("click",function(){
    const li= document.createElement("li")
    lista.appendChild(li)
    li.textContent= input.value
    const new_bot=document.createElement("button")
    li.appendChild(new_bot)
    new_bot.textContent="Eliminar"
    new_bot.addEventListener("click",function(){
        li.remove()
    })
})
