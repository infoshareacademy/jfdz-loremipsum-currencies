(function() {

    var mainNav = document.querySelector('.main-navigation');

    function closeNavigation() {
        mainNav.classList.remove('show');
    }

    function showNavigation() {
        mainNav.classList.add('show');
    }
    
    var closeMainNav = document.querySelector('.close-main-navigation');
    closeMainNav.addEventListener('click', closeNavigation, false);

    var btnShowNav = document.querySelector('.header__btn-nav');
    btnShowNav.addEventListener('click', showNavigation, false);

})();

