/* SVG clicável + Menu*/

const menuButton = document.getElementById("menuButton");
const overlay = document.getElementById("overlay");

menuButton.addEventListener("click", () => {
    overlay.style.display = "flex";
    document.body.style.overflow = "hidden"; // Impede a rolagem
});

overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
        overlay.style.display = "none";
        document.body.style.overflow = "auto"; // Restaura a rolagem
    }
});


