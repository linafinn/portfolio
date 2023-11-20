console.log("hej")

// dom hämter dom här klassernan som har de här namanen. 
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
// den lyssna på när någon klickar, på hamburgaren. och då körs funktionen.
hamburger.addEventListener("click", mobileMenu);
// här kommer funktionen, alltså att här togglas de alltså som en strömbrytare, när det trycks på ska den synsas eller döljas.
function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


// hämtar tagarna
const navLink = document.querySelectorAll(".nav-link");
// när jag kickar på den öppn menyn kommer den att stängas 
navLink.forEach(n => n.addEventListener("click", closeMenu));
// alltså att det kommer försvinas tars bort. 
function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}




// en varialbel.
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
// 
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  // två loopar, star bort alla slids. 
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  // plockas en och en slids fram
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}