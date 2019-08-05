(function () {
    // let blockFront = document.querySelectorAll('.blockFront');
    let blockFront = Array.from(document.querySelectorAll('.blockFront'));
    let blockBack = Array.from(document.querySelectorAll('.blockBack'));
    let blockFrontBtnMore = Array.from(document.querySelectorAll('.blockFrontBtnMore'));
    let blockBackBtnClose = Array.from(document.querySelectorAll('.blockBackBtnClose'));


    blockFrontBtnMore.forEach(function (el, i) {
        el.addEventListener('click', function () {
            blockFront[i].style.transform = 'perspective( 1000px ) rotateY( -180deg )';
            blockBack[i].style.transform = 'perspective( 1000px ) rotateY( 0deg )';
        }, false);
    });
    blockBackBtnClose.forEach(function (el, i) {
        el.addEventListener('click', function () {
            blockFront[i].style.transform = 'perspective( 1000px ) rotateY( 0 )';
            blockBack[i].style.transform = 'perspective( 1000px ) rotateY( 180deg )';
        }, false);
    });

})();