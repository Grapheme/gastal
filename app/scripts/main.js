var Gastal = {};
Gastal.faq = function() {
    $('.js-faq-question').on('click', function(){
        $(this).toggleClass('opened')
            .siblings().removeClass('opened')
            .find('.js-faq-answer').slideUp();
        $(this).find('.js-faq-answer').slideToggle();
    });
}
Gastal.articles = function() {
    if(!$('.js-tab').length) return;
    var show = function(id) {
        $('.js-tab-link').eq(id).addClass('active')
            .siblings().removeClass('active');
        $('.js-tab').eq(id).show()
            .siblings().hide();
    }
    var init = function() {
        show(0);
        $('.js-tab-link').on('click', function(){
            show($(this).index());
            return false;
        });
    }
    init();
}
Gastal.map = function() {
    function initialize() {
        var mapOptions = {
            center: new google.maps.LatLng(55.724054, 37.610413),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoomControl: false,
            scrollwheel: false,
            disableDoubleClickZoom: true
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        var myLatlng = new google.maps.LatLng(55.724054, 37.610413);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            icon: 'images/location_mark.png'
        });
    }
    if($('#map').length) {
        google.maps.event.addDomListener(window, 'load', initialize);
    }
}
$(function(){
    Gastal.faq();
    Gastal.map();
    Gastal.articles();
});
