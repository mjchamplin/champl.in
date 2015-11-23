// remap jQuery to $
(function($){
	/* trigger when page is ready */
	$(document).ready(function (){
        
        var instaLat = {};
        var instaLon = {};
        var instaSrc = {};
        var instaTitle = {};        
				//Fallback coordinates (in case Instagram returns null)
        instaLat = 30.2921987;
        instaLon = -97.7355486;
        
        //Get latest cache.json file
        $.ajax({
          url: "loc/cache.json",
          async: false,
          dataType: 'json',
          success: function(data) {
            instaLat = data[0].lat;
            instaLon = data[0].lon;
            instaSrc = data[0].src;
            instaTitle = data[0].title;
          }
        });
        
				//log latest IG title for testing
        console.log(instaTitle);
     
				//Create Mapbox Map, center on IG lat/long
        L.mapbox.map('mapbox', 'bobbysud.lff265id', { scrollWheelZoom: false, dragging: false, center: [instaLat,instaLon], zoom: 12});
        
				//Find .ig and put IG image there (not used)
        $(".ig").fadeOut( 100 ).delay( 800 ).fadeIn( 400 ).append("<img class='instagram-image' src='" + instaSrc +"' />"); 

				//Configures and initializes fullpage.js
        $('#fullpage').fullpage({
            resize : true,
            sectionsColor : [],
            anchors:['slideOne', 'slideTwo', 'slideThree', 'slideFour', 'slideFive'],
            scrollingSpeed: 1300,
            easing: 'easeOutExpo',
            menu: '#menu',
            navigation: true,
            navigationPosition: 'right',
            navigationTooltips: ['slideOne', 'slideTwo', 'slideThree', 'slideFour'],
            slidesNavigation: true,
            slidesNavPosition: 'bottom',
            loopBottom: false,
            loopTop: false,
            loopHorizontal: true,
            autoScrolling: true,
            scrollOverflow: false,
            css3: true,
            keyboardScrolling: true,
            continuousVertical: false,
            animateAnchor: true,
            sectionSelector: '.section',
            slideSelector: '.slide',

            //events
            onLeave: function(index, nextIndex, direction){},
            afterLoad: function(anchorLink, index){},
            afterRender: function(){},
            afterResize: function(){},
            afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
            onSlideLeave: function(anchorLink, index, slideIndex, direction){}
        });                      
		});
})(window.jQuery);
