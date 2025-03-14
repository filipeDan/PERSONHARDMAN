// DOM
// navegar no documento html
/* 
const brand = document.querySelector("#brand");/* captura o lugar que quer fazer o evento */

/* brand.addEventListener('click', function(){  /* addEventListener é para ouvir tudo que esta acontecendo na Brand */
/*     console.log("testando") /* mostra o que vai mostrar 
}) */

 //selecionar os elementos dos slides

 const slides = document.querySelectorAll(".banner"); /* o querySelectorAll ele seleciona todos que tiver a class banner, e dentro ( .banner) aqui vc coloca o ( . ) pq é uma class*/
 

 const dots = document.querySelectorAll(".dot");
 
 let slideIndex = 0; 


 function showSlides(){
    for(let i=0; i < slides.length, i++){

        slides[i].classList.remove("active")/* esconde um e aparece outro  */
        dots[i].classList.remove("active")/* esconde um e aparece outro  */
    }

    slideIndex++; // aqui ele avança a variavel, 
    if (slideIndex > slides.length){
        slideIndex = 1;
    }

    slides[slideIndex -1].classList.add("active")
    dots[slideIndex -1].classList.add("active")

    setTimeout(showSlides, 3000)
 }

 /* Inicialização */

 showSlides()