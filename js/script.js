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


    // ============ contrast page ================
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
    });// == /contrast page


    // ============ responsive scroll menu ================
    var $header = $('.header');
    var $headerHeight = $header.height();

    $(window).on('scroll', function() {
        var $pageTop = $(document).scrollTop();
        var headerMin = ( $pageTop > $headerHeight ) ? $header.addClass('header-min') : $header.removeClass('header-min');
        return headerMin;
    }); // == /responsive scroll menu


    // ============ button back to top ================
    var $btnBackToTop = $('.btn-back-to-top');
    var $viewportHeight = $(window).height() - 300;

    var buttonShowHide = function() {
        var $pageTop = $(document).scrollTop();
        return ( $pageTop > $viewportHeight ) ? $btnBackToTop.fadeIn() : $btnBackToTop.fadeOut()
    }

    buttonShowHide();
    $(window).on('scroll', function() {
        buttonShowHide();
    });

    $btnBackToTop.on('click', function() {
       $('body').animate({
           scrollTop: 0
       }, 800);
    });// == /button back to top


    // ============== change language =============
    function changeLanguage() {
        $('[data-lang]').each(function(index, el) {
            var $textLang = $(el).data('lang');
            $(el).text( lang [ localStorage.getItem('pageLang') || 'pl' ][ $textLang ] );
        });

        var activeButton = localStorage.getItem('pageLang');
        $('.btn-change-lang').removeClass('active');
        if(activeButton) {
            $('.btn-change-lang[data-language=' + activeButton + ']').addClass('active');
        } else {
            $('.btn-change-lang[data-language=pl]').addClass('active');
        }
    }

    changeLanguage();

    $('.btn-change-lang').on('click', function(ev) {
        ev.preventDefault();
        var $button = $(this);

        $('.btn-change-lang').removeClass('active');
        $button.addClass('active');

        var $changeLang = $(this).data('language');
        localStorage.setItem('pageLang', $changeLang);
        changeLanguage();
    });// == /change language


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


    // ================== animate slider =================
    var imgArr = ['slide_01', 'slide_03', 'slide_02'];
    var $banner = $('.banner');

    function animateImage() {
        var getImage = Math.floor(Math.random() * imgArr.length);
        $banner.css({
            'opacity': "0",
            'background-image': 'url("images/' + imgArr[getImage] + '.jpg")'
        }).animate({
            opacity: "1"
        });
        setTimeout(animateImage, 5000);
    }

   animateImage();
    // == animate slider


    // ================== link go to section =================
    $('.main-navigation').on('click', 'a', function(ev) {
        ev.preventDefault();
        var $link = $(this);
        var href = $link.attr('href');
        var position = $(href).offset().top - 80;

        $('.main-navigation ul li').removeClass('active');
        $link.parent().addClass('active');

        $('html, body').animate({
            scrollTop: position
        }, 800);

        $('.main-navigation').removeClass('show');
    });



    $(document).on('scroll', scrollGoToSection);

    function scrollGoToSection() {
        var scrollTop = $(document).scrollTop();

        $('.main-navigation ul li a').each(function () {
            var sectionElement = $(this).attr('href');

            var sectionPosition = $(sectionElement).offset().top;

            console.log(sectionPosition, scrollTop);

            if (sectionPosition <= scrollTop + 100) {
                $('.main-navigation ul li a').parent().removeClass('active');
                $(this).parent().addClass('active');
            }
        });
    }

});


