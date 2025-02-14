document.addEventListener("DOMContentLoaded", function() {
    const color = ["Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink", "Brown", "Black", "White", "Gray", "Cyan", "Magenta", "Lime", "Teal", "Indigo", "Violet", "Gold", "Silver", "Beige"];

    const cambiar_color = document.querySelector(".boton__clickme");
    const cambiar_texto = document.querySelector(".color-cambiar__valor");

    cambiar_texto,cambiar_color.addEventListener("click", function() {
        const Colorrandom = color[Math.floor(Math.random() * color.length)];
        document.body.style.backgroundColor = Colorrandom;
        document.getElementsByClassName(".color-cambiar__valor").textContent= Colorrandom
    });
});
