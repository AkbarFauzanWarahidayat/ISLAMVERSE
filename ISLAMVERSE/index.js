// logika navbar
const hamburger = document.querySelector('#hamburger');
const containerNavMobile = document.querySelector('#nav-mobile');
const main = document.querySelector('main');
const navContainer = document.querySelector('.nav-container');

hamburger.addEventListener('click', function(event){
    containerNavMobile.classList.toggle('open');
    event.stopPropagation();
});

main.addEventListener('click', function(event){
    containerNavMobile.classList.remove('open');
    event.stopPropagation();
});

window.addEventListener('scroll', function() { 
    const scrollPosition = window.scrollY;

    if(scrollPosition > 50){
        navContainer.style.backgroundColor = '#073a33f3';
    }
    else{
        navContainer.style.backgroundColor = '#073a33';
    };

});

// logika navbar end