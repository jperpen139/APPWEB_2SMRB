document.addEventListener("DOMContentLoaded", function() {
    //declaro lista de colores
    const color = [
        "#FF0000", // Red
        "#0000FF", // Blue
        "#008000", // Green
        "#FFFF00", // Yellow
        "#FFA500", // Orange
        "#800080", // Purple
        "#FFC0CB", // Pink
        "#A52A2A", // Brown
        "#000000", // Black
        "#FFFFFF", // White
        "#808080", // Gray
        "#00FFFF", // Cyan
        "#FF00FF", // Magenta
        "#00FF00", // Lime
        "#008080", // Teal
        "#4B0082", // Indigo
        "#EE82EE", // Violet
        "#FFD700", // Gold
        "#C0C0C0", // Silver
        "#F5F5DC"  // Beige
      ];
      
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