(function ($) {
    $(document).ready(function () {
        $('.mfp-intro').magnificPopup({
            type: 'image'
        });
        //карусель
        $(".lp-gallery-1").owlCarousel({
            nav: true,
            navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
            margin: 10,
            responsive: {
                0: {
                    items: 1,
                    dots: false
                },
                775: {
                    nav: false,
                    items: 2
                },
                1200: {
                    nav: false,
                    items: 3
                }
            }
        });
        $(".lp-gallery-2").owlCarousel({
            nav: true,
            navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
            margin: 10,
            center: true,
            autoHeight: true,
            loop: true,
            responsive: {
                0: {
                    items: 1,
                    dots: false
                },
                775: {
                    nav: false,
                    items: 2
                },
                1200: {
                    nav: false,
                    items: 2
                }
            }
        });
        $(".lp-gallery-3").owlCarousel({
            nav: true,
            navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
            margin: 10,
            center: true,
            autoHeight: true,
            loop: true,
            responsive: {
                0: {
                    items: 1,
                    dots: false
                },
                775: {
                    nav: false,
                    items: 2
                },
                1200: {
                    nav: false,
                    items: 2
                }
            }
        });
        //всплывающий просмотр
        $('.lp-gallery-1').each(function () {
            $(this).magnificPopup({
                delegate: 'a',
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        });
        $('.lp-gallery-2').each(function () {
            $(this).magnificPopup({
                delegate: 'a',
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        });
        $('.lp-gallery-3').each(function () {
            $(this).magnificPopup({
                delegate: 'a',
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        });
        $('#feedback').wiFeedBack({
            fbScript: 'blocks/wi-feedback.php',
            fbLink: false,
            fbColor: false
        });

        $('.btn-sent').on('click', function (e) {
            if ($('input[type="text"]').val() && $('input[type="tel"]').val() && $('input[type="email"]').val()) {
                e.preventDefault()
                $('.subMsg').removeClass('subMsgHide');
            }

        });
        $('.ok').on('click', function () {
            $('.subMsg').addClass('subMsgHide');
            $('input[type="text"]').val('');
            $('input[type="tel"]').val('');
            $('input[type="email"]').val('');
            $('textarea').val('');
        });
    });
})(jQuery);