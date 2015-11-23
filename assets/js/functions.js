

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
        
        
        console.log(instaTitle);
     
        L.mapbox.map('mapbox', 'bobbysud.lff265id', { scrollWheelZoom: false, dragging: false, center: 
[instaLat,instaLon], zoom: 12});
        
        $(".ig").fadeOut( 100 ).delay( 800 ).fadeIn( 400 ).append("<img class='instagram-image' src='" + instaSrc +"' />"); 

        $('#fullpage').fullpage({
            //verticalCentered: true,
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
            //paddingTop: '3em',
            //paddingBottom: '10px',
            //normalScrollElements: '#element1, .element2',
            //normalScrollElementTouchThreshold: 5,
            keyboardScrolling: true,
            //touchSensitivity: 3,
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
