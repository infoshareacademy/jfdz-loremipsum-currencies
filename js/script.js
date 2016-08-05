$(document).ready(function() {

    // ============ navigation main ================
    var mainNav = document.querySelector('.main-navigation');

    function closeNavigation(ev) {
        ev.preventDefault();
        mainNav.classList.remove('show');
    }
    function showNavigation(ev) {
        ev.preventDefault();
        mainNav.classList.add('show');
    }
    var closeMainNav = document.querySelector('.close-main-navigation');
    closeMainNav.addEventListener('click', closeNavigation);

    var btnShowNav = document.querySelector('.header__btn-nav');
    btnShowNav.addEventListener('click', showNavigation);

    // ============ css contrast ================
    var $linkContrast = $('<link>');
        $linkContrast
            .attr('rel', 'stylesheet')
            .attr('href', 'css/contrast.css')
            .attr('id', 'contrast-style');

    $('.btn-change-contrast').on('click', function(ev) {
        ev.preventDefault();

        var button = $(this);
        button.toggleClass('show-contrast');
        if(button.hasClass('show-contrast')) {
            $('head').append($linkContrast);
        } else {
            $linkContrast.remove();
        }
    });


    // ============ responsive scroll menu ================
    var $header = $('.header');
    var $headerHeight = $header.height();
    $(window).on('scroll', function() {
        var headerMin = ( $(document).scrollTop() > $headerHeight ) ? $header.addClass('header-min') : $header.removeClass('header-min');
        return headerMin;
    });

    // ================== css font size =================
    var linkFontSize = document.querySelectorAll('.btn-font-size');
    var linkFontSizeLength = linkFontSize.length;

    function changeFontSize(ev) {
        ev.preventDefault();
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

});


