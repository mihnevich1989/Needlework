(function () {
   
    ymaps.ready(init);

    function init() {
        // Создание карты.    
        var myMap = new ymaps.Map("map", {
                center: [51.797679, 28.317781],
                controls: ['default', 'routeButtonControl'],
                zoom: 13
            }),
            myPlacemark3 = new ymaps.Placemark([51.797679, 28.317781], {
                preset: 'islands#blueIcon',
                balloonContentHeader: 'Лисицкая Е.Н.',
                balloonContentBody: '+375 (29) 363 92 55 </br>'+
                                    'Куклы ручной работы.'
            });                         
        myMap.geoObjects.add(myPlacemark3);
    }

    //убираю чертный квадрат по клику
    let clickMap = document.querySelector('.click-map');
    clickMap.addEventListener('click', function(){
        clickMap.style.display = 'none';
    }, false);

})();