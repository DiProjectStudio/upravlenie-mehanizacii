$(document).ready(function () {

    if ($('#map').length) {
        let resizeTimer;
        let myMap;

        function initMap() {
            if ($('#map').length && !myMap) {
                ymaps.ready(init);
            }
        }

        function init() {
            myMap = new ymaps.Map('map', {
                center: centerPoint,
                zoom: zoomValue,
                controls: []
            })


            $.each(placemarks, function (index, obj) {
                let myPlacemark = new ymaps.Placemark(obj.coordinates,
                    {
                        // iconLayout: 'default#image',
                        // iconImageHref: 'assets/images/icon_pointmark.svg',
                        // iconImageSize: [40, 40],
                        iconContent: 'Управление механизации 333'
                    },
                    {
                        preset: 'islands#blueStretchyIcon'
                    }
                );

                myMap.geoObjects.add(myPlacemark);
            });

            ymapsTouchScroll(myMap, {preventScroll: true, preventTouch: true});
        }

        // Инициализация карты при загрузке страницы
        initMap();

        // Обработчик изменения размера окна, иницализация карты снова
        $(window).resize(function () {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function () {
                if (myMap) {
                    myMap.destroy();
                    myMap = null;
                }
                initMap();
            }, 100);
        });
    }
});