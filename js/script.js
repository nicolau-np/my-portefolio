var previousScrollPosition = document.documentElement.scrollTop;
var button_menu = document.querySelector('.button-menu');
var menu_mobile = document.querySelector('.menu-mobile');

button_menu.addEventListener('click', function(e){
    menu_mobile.classList.toggle('hidden');
});


