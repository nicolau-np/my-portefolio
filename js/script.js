var previousScrollPosition = document.documentElement.scrollTop;
var buttonMenu = document.querySelector('.button-menu');
var menuMobile = document.querySelector('.menu-mobile');

var btnToTop = document.querySelector('.btn-to-top');

buttonMenu.addEventListener('click', function(e){
    menuMobile.classList.toggle('hidden');
});


window.addEventListener('scroll', function(e){
    const currentScrollPosition = document.documentElement.scrollTop;
    if(previousScrollPosition<currentScrollPosition){
        btnToTop.classList.remove('hidden');
    }else if(previousScrollPosition == currentScrollPosition){
        btnToTop.classList.add('hidden');
    }
});

