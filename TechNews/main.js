//Esto habilita el menú sandwich
document.querySelector('.menu-btn').addEventListener('click', ()=>{
    //Agrega o elimina la clase llamada show
    document.querySelector('.nav-menu').classList.toggle('show');
})

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', {delay:200});
ScrollReveal().reveal('.cards-banner-one', {delay:200});
ScrollReveal().reveal('.cards-banner-two', {delay:200});
