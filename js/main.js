(function($) {
    'use strict';

    /*--------------------------------------------------
    01. PORTFOLIO ACTIVATION
    ---------------------------------------------------*/
    $('.portfolio-content').imagesLoaded(function() {
        // PORTFOLIO ACTIVATION
        var $grid = $('.portfolio-masonry');
        $grid.isotope({
            itemSelector: '.portfolio-item',
            percentPosition: true,
        });
        // PORTFOLIO FILTERING ACTIVATION
        $('.portfolio-filter li a').on('click', function(event) {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
            event.preventDefault();
        });
        // FILTER MENU CLASS ADDITION  
        $('.portfolio-filter li').on('click', function(event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });
        /* ---------------------------------------------------
         PORTFOLIO FILTERING RANDOM
         ---------------------------------------------------- */
        $('.btn-shuffle').on('click', function () {
            $grid.isotope('updateSortData').isotope({
                sortBy: 'random'
            });
        });        
        /*--------------------------------------------------
        LOAD MORE BUTTON FOR PORTFOLIO
        ---------------------------------------------------*/
        $('.portfolio-content').on('click', '.lode-more', function(event) {
            $('.portfolio-item').removeClass('hidden');
            $grid.isotope();
            $(this).hide();
            $('.pagination-area .load-more').append('<a class="button" href="javascript:void(0)">No More Items</a>');
            event.preventDefault();
        });
    });
    /*--------------------------------------------------
    02. BLOG ACTIVATION
    ---------------------------------------------------*/
    $('.blog-masonry').imagesLoaded(function() {
        // MASONRY BLOG
        var $blogGrid = $('.blog-masonry');
        $blogGrid.isotope({
            itemSelector: '.post-grid',
            percentPosition: true,
        });
        /*--------------------------------------------------
         LOAD MORE BUTTON FOR BLOG POST SECTION
        ---------------------------------------------------*/
        $('.blog-pagination-area .lode-more').on('click', function(event) {
            $('.post-grid').removeClass('hidden');
            $blogGrid.isotope();
            $(this).hide();
            $('.blog-pagination-area .load-more').append('<a class="button" href="javascript:void(0)">No More Items</a>');
            event.preventDefault();
        });
    });

    /* ---------------------------------------------
     03. SLICK SLIDER FOR HOME PAGE
    --------------------------------------------- */
    var mainSlider = $('.xboot-slider-active');
    mainSlider.slick({
        dots: false,
        infinite: true,
        fade: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: false,
        arrows: true,
    });

    /* ---------------------------------------------
     04. SLIDER ACTIVE FOR GALLERY
    --------------------------------------------- */
    var gallerySlider = $('.post-gallery');
    gallerySlider.slick({
        dots: true,
        infinite: false,
        fade: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: false,
        arrows: false,
    });

    /* ---------------------------------------------
     05. SLIDER ACTIVE FOR INSTAGRAM WIDGET
    --------------------------------------------- */
    var widgetSlider = $('.instra-slider');
    widgetSlider.slick({
        autoplay: true,
        dots: false,
        infinite: false,
        fade: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: false,
        arrows: false,
    });

    /* ---------------------------------------------------------------------
     06. SLIDER ACTIVE FOR TESTIMONIAL / SINGLE PROJECT
    -----------------------------------------------------------------------*/
    var commonSlider = $('.single-post-slider, .single-project-slider');
    commonSlider.slick({
        autoplay: true,
        dots: false,
        infinite: false,
        fade: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: false,
        arrows: true,
    });
    /* ---------------------------------------------------------------------
     07. SLIDER ACTIVE FOR TESTIMONIAL 
    -----------------------------------------------------------------------*/
    var testimonialSlider = $('.testimonial-slider');
    testimonialSlider.slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    /* ---------------------------------------------
     08. SLIDER ACTIVE HOME 5
    --------------------------------------------- */
    var sliderFive = $('.slider-active-5');
    sliderFive.slick({
        autoplay: true,
        dots: true,
        infinite: false,
        fade: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: false,
        arrows: false,
    });

    /* ---------------------------------------------
     09. CLIENTS BRAND LOGO SLICK SLIDER ACTIVATION.
    --------------------------------------------- */
    var brandLogotSlider = $('.brand-logo-slider');
    brandLogotSlider.slick({
        dots: false,
        arrows: false,
        slidesToShow: 5,
        infinite: true,
        speed: 300,
        adaptiveHeight: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    /*------------------------------------------------
     10. FUN FACT COUNTER ACTIVATION
    -------------------------------------------------- */
    $('.fact-number').counterUp({
        delay: 20,
        time: 3000
    });

    /*-----------------------------------
     11.  PARALLAX ACTIVATION
    /*-----------------------------------*/
    $.stellar({
        horizontalScrolling: false,
        scrollProperty: 'scroll',
        positionProperty: 'position',
        verticalOffset: 40
    });

    /*------------------------------------------------
     12. MOBILE MENU ACTIVATION
    -------------------------------------------------- */
    $('.xboot-mobile-menu').meanmenu();

    /*------------------------------------------------
     13. BOOTSTRAP ACCORDION 
    -------------------------------------------------- */
    $('.faq-content-2 .panel-heading a').on('click', function(e) {
        if ($(this).parents('.panel').children('.panel-collapse').hasClass('in')) {
            e.stopPropagation();
        }
        e.preventDefault();
    });

    /*----------------------------------------
     14. MENU HAMBURGER
    ---------------------------------------- */
    $('.hamburger').on('click', function() {
        $(this).toggleClass('is-active');
        $(this).next().toggleClass('nav-show');
    });

    /*------------------------------------------------
     15. WOW JS ACTIVATION
    -------------------------------------------------- */
    new WOW().init();

    /*------------------------------------------------
     16. INSTAGRAM FEED ACTIVATION 
    -------------------------------------------------- */
    if ($('#instafeed').length !== 0) {
        var instaFeedFooter = new Instafeed({
            target: 'instafeed',
            get: 'user',
            limit: '6',
            userId: '4713066548',
            resolution: 'standard_resolution',
            accessToken: '4713066548.8d3ef49.6942ccf6893b404185d88e24f7d56229',
            template: '<li><a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a></li>'
        });
        instaFeedFooter.run();
    }

    /*-------------------------------------------
     17. SCROLL TO TOP BUTTON ADDED
    ---------------------------------------------*/
    $('body').append('<a id="scroll-btn" class="scroll-btn" href="#"><i class="ti-arrow-up"></i></a>');
    if ($('#scroll-btn').length !== 0) {
        var scrollTrigger = 100, // px
            backToTop = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#scroll-btn').addClass('btn-show');
                } else {
                    $('#scroll-btn').removeClass('btn-show');
                }
            };
        backToTop();
        $(window).on('scroll', function() {
            backToTop();
        });
        $('#scroll-btn').on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 500);
        });
    }

    /*-------------------------------------------
     18. GOOGLE MAP ACTIVATION
    ---------------------------------------------*/
    if ($('.map-row').length !== 0) {
        google.maps.event.addDomListener(window, 'load', init);

        function init() {
            // Basic options for a simple Google Map
            // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
            var mapOptions = {
                // How zoomed in you want the map to start at (always required)
                zoom: 14,
                scrollwheel: false,
                // The latitude and longitude to center the map (always required)
                center: new google.maps.LatLng(40.6700, -73.9400), // New York
                // This is where you would paste any style found on Snazzy Maps.
                styles: [{ "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#000000" }, { "lightness": 40 }] }, { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#000000" }, { "lightness": 16 }] }, { "featureType": "all", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#000000" }, { "lightness": 17 }, { "weight": 1.2 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 20 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 21 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#000000" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 16 }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 19 }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 17 }] }]
            };
            var contentString = '<h2>Light.</h2>';

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            // Get the HTML DOM element that will contain your map 
            // We are using a div with id="map" seen below in the <body>
            var mapElement = document.getElementById('map');

            // Create the Google Map using our element and options defined above
            var map = new google.maps.Map(mapElement, mapOptions);

            // Let's also add a marker while we're at it
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(40.6700, -73.9400),
                map: map,
                title: 'Light'
            });
            infowindow.open(map, marker);
        }
    }

})(jQuery);