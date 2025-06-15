// seleccion de botones 
const boton_amp= document.querySelector(".cabecero__navegador__boton__amp")
const boton_osc= document.querySelector(".cabecero__navegador__boton__osc")
const boton_previo=document.querySelector(".principal__seccion2__boton__flecha__previo")
const boton_siguiente=document.querySelector(".principal__seccion2__boton__flecha__siguiente")
//seleccion clases modo oscuro
const body= document.querySelector(".body")
const cabecero=document.querySelector(".cabecero")
const principal=document.querySelector(".principal")
const principal1=document.querySelector(".principal__seccion1")
const boton_principal=document.querySelector(".principal__seccion1__boton")
const principal2=document.querySelector(".principal__seccion2")
const pie=document.querySelector(".pie")
const pie_seccion=document.querySelector(".pie__seccion")
const pie__seccion_listas=document.querySelector(".pie_seccion__listas__titulo")
const rutas_imagenes = ["./assets/imagen1.jpg", "./assets/imagen2.jpg", "./assets/imagen3.jpg"]
const imgs=document.querySelector(".principal__seccion2__imagenes__figura__imagen")



//funciones, event listener


// para oscurecer
boton_osc.addEventListener("click",function(){
    cabecero.classList.toggle("cabecero__oscuro")
    boton_amp.classList.toggle("cabecero__navegador__boton__amp__oscurecer")
    boton_osc.classList.toggle("cabecero__navegador__boton__osc__oscurecer")
    principal1.classList.toggle("principal__seccion1__osc")
    boton_principal.classList.toggle("principal__seccion1__boton__osc")
    principal2.classList.toggle("principal__seccion2__osc")
    pie.classList.toggle("pie__osc")
    pie_seccion.classList.toggle("pie__seccion__osc")
    body.classList.toggle("body__osc")
    
    if(boton_osc.textContent.trim() === "Modo claro"){   //Se utiliza trim para eliminar los espacios para poder comparar con el if
        boton_osc.textContent = "Modo oscuro";
    } else {
        boton_osc.textContent = "Modo claro";
    }
    
})
// para ampliar
boton_amp.addEventListener("click",function(){
    cabecero.classList.toggle("cabecero__amp")
    principal.classList.toggle("principal__amp")
    pie.classList.toggle("pie__amp")
    if(boton_amp.textContent.trim() === "Ampliar"){  //Se utiliza trim para eliminar los espacios para poder comparar con el if
        boton_amp.textContent = "Encoger";
    } else {
        boton_amp.textContent = "Ampliar";
    }
})

// para pasar imagenes
let siguiente=1 //varaible auxiliar
boton_siguiente.addEventListener("click",function(){
    rutas_imagenes.forEach((elemento,lista) => {  // con foreach lo que hacemos es que el elementos que en este caso es lo que queremos que cambie el atributo cambie en funcion del la posicion en la qie se encuentre la variable "siguiente"
        if(lista == siguiente){
            imgs.setAttribute("src",elemento)
        }
    });
    siguiente++;
    if(siguiente>=rutas_imagenes.length){
        siguiente=0
    }
})

let atras = -1;

boton_previo.addEventListener("click", function(){
    rutas_imagenes.forEach((elemento, lista) => {
        if(lista == atras){
            imgs.setAttribute("src", elemento);
        }
    });
    atras--;
    
    if(atras < 0){
        atras = rutas_imagenes.length - 1;
    }
});

