const elemento= document.querySelectorAll(".elementos")

elemento.forEach((elemento, i)=> {
    elemento.textContent="Nuevo elemento"+ i
});

