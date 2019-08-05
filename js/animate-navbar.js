(function () {
    let nav = document.querySelector('nav');


    window.onscroll = function () {
        let scrollY = window.pageYOffset || document.documentElement.scrollTop;
        let windowWidth = window.innerWidth;
        let brand = document.querySelector('.navbar-brand');

        if (scrollY > 300 && windowWidth >= 1000) {
            nav.classList.add('bar-hide');
            brand.classList.remove('font-effect-3d');
        } else {
            nav.classList.remove('bar-hide')
            brand.classList.add('font-effect-3d');
        }

    }

    //плавный скролл к блоку
    let lpNav = document.querySelector('ul.navbar-nav')
    lpNav.addEventListener('click', function (e) {
        e.preventDefault();
        let target = e.target;
        let attrTarget = target.getAttribute('href');
        let section = document.querySelector(attrTarget);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }, );

    //подсветка элемента навигации от текущего местоположения jQuery
    $(function () {
        function setNavigatio() {
            let lpNav = $('ul.navbar-nav');
            let curItem = '';
            $('section').each(function () {
                if ($(window).scrollTop() > $(this).offset().top - 300) {
                    curItem = $(this).attr('id');
                }
            });
            let noActiveLink = lpNav.find('li.curent-link').length == 0,
                newActiveRequired = lpNav.find('li.active a').attr('href') != '#' + curItem;
            if (noActiveLink || newActiveRequired) {
                lpNav.find('li.curent-link').removeClass('curent-link');
                lpNav.find('li a[href="#' + curItem + '"]').parent().addClass('curent-link');
            } else if ($('section').offset().top <= 100) {
                lpNav.find('li.curent-link').removeClass('curent-link');
                lpNav.find('li a[href="#' + curItem + '"]').parent().addClass('curent-link');
            }
        }
        setNavigatio();
        $(window).on('load scroll', setNavigatio);
    });
    // окончание кода jQuery
})();