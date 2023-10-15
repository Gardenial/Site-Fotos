/* Slideshow */
var slideIndex = 1;
slideIndex = 1; // Defina o slideIndex como 1 para mostrar a primeira imagem ao carregar a página
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

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


