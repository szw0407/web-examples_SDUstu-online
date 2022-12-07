let slideIndex = 0;
let timer2;
// showSlides(slideIndex);

showSlides2();


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
  timer2=setTimeout(showSlides2, 3000);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
  timer2=setTimeout(showSlides2, 3000); 
}

function showSlides(n) {
  clearTimeout(timer2)
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

}


function showSlides2() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
 // Change image every 3 seconds
 timer2=setTimeout(showSlides2, 3000);
}

let OpenMenuTime=0
function open_menu(){
  OpenMenuTime++;
  let k=document.getElementById("menu")
  if(OpenMenuTime % 2 != 0){
  
  k.style.display="block";
  }
  else{
    k.style.display="none";
  }
  
}