
function googleMap(mapWrap){
    function initialize() {
        var myLatlng = new google.maps.LatLng(cordX,cordY);
        var myLatlngMarker = new google.maps.LatLng(markCoordX, markCoordY);
        var myOptions = {
            zoom: 16,
            center: myLatlng,
            disableDefaultUI: true, //без управляющих елементов
            mapTypeId: google.maps.MapTypeId.ROADMAP, // SATELLITE - снимки со спутника,
            zoomControlOptions: {
               position: google.maps.ControlPosition.LEFT_BOTTOM // позиция слева внизу для упр елементов
            }
        }
        var map = new google.maps.Map(document.getElementById(mapWrap), myOptions);

        /*маркер на svg*/
        var SQUARE_PIN = 'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z m-6,6a6,6 0 1,0 12,0a6,6 0 1,0 -12,0'
        //больше - http://map-icons.com/
        /*/маркер на svg*/

        //var image = 'images/footer-contact-marker.png';   // иконка картинкой

        var marker = new google.maps.Marker({
            position: myLatlngMarker,
            map: map,
            animation: google.maps.Animation.DROP, // анимация при загрузке карты
            icon: 'images/map-icon.png'
        });

        map.set('styles', [
            {
              stylers: [
                { hue: "#ff0000" },
                { saturation: -100 }
              ]
            },{
              featureType: "road",
              elementType: "geometry",
              stylers: [
               { saturation: 0 },
                { invert_lightness: false }
              ]
            },{
              featureType: "road",
              elementType: "labels",
              stylers: [
                { visibility: "off" }
              ]
            }
        ]);

    }
    initialize();
}


$(document).ready(function(){

});

$(window).load(function(){

	googleMap('map_id');

});

$(window).resize(function(){

});