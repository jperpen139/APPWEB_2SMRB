document.addEventListener("DOMContentLoaded", function() {
    //declaro lista de colores
    const color = ["Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink", "Brown", "Black", "White", "Gray", "Cyan", "Magenta", "Lime", "Teal", "Indigo", "Violet", "Gold", "Silver", "Beige"];
//Selecciono los botones por clase 
    const cambiar_color = document.querySelector(".boton__clickme");
    const cambiar_texto = document.querySelector(".color-cambiar__valor");
//añado evento click al boton
    cambiar_texto,cambiar_color.addEventListener("click", function() {
        const Colorrandom = color[Math.floor(Math.random() * color.length)];
        document.body.style.backgroundColor = Colorrandom;//seleccione
        document.getElementById("color").textContent= Colorrandom//selecciono por id la linea donde pone el nombre de color
    });
});