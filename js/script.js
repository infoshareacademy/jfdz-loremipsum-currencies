(function() {

    // ============ navigation main ================
    var mainNav = document.querySelector('.main-navigation');

    function closeNavigation() {
        mainNav.classList.remove('show');
    }
    function showNavigation() {
        mainNav.classList.add('show');
    }
    var closeMainNav = document.querySelector('.close-main-navigation');
    closeMainNav.addEventListener('click', closeNavigation);

    var btnShowNav = document.querySelector('.header__btn-nav');
    btnShowNav.addEventListener('click', showNavigation);


    // ============ css contrast ================
    var linkContrast = document.createElement('link');
    linkContrast.setAttribute('rel', 'stylesheet');
    linkContrast.setAttribute('href', 'css/contrast.css');
    linkContrast.setAttribute('id', 'contrast-style');

    var headEl = document.querySelector('head');
    function switchStyle(ev) {
        ev.target.classList.toggle('show-contrast');
        if(ev.target.classList.contains('show-contrast')) {
            headEl.appendChild(linkContrast);
        } else {
            var contrastStyle = document.querySelector('#contrast-style');
            contrastStyle.remove();
        }
    }

    var btnChangeContrast = document.querySelector('.btn-change-contrast');

    btnChangeContrast.addEventListener('click', switchStyle);


    // ================== css font size =================
    var linkFontSize = document.querySelectorAll('.btn-font-size');
    var linkFontSizeLength = linkFontSize.length;

    function changeFontSize(ev) {
        for(var i = 0; i < linkFontSizeLength; i++) {
            linkFontSize[i].classList.remove('active');
            ev.target.classList.add('active');
        }
        var htmlEl = document.querySelector('html');
        if(ev.target.classList.contains('small')) {
            htmlEl.classList.remove('large');
            htmlEl.classList.add('small');
        } else if(ev.target.classList.contains('large')) {
            htmlEl.classList.remove('small');
            htmlEl.classList.add('large');
        } else {
            htmlEl.classList.remove('small', 'large');
        }
    }

    for(var i = 0; i < linkFontSizeLength; i++) {
        linkFontSize[i].addEventListener('click', changeFontSize);
    }

})();


