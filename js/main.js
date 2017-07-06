"use strict"; // Start of use strict

function autoCenterDot(){
    var docWidth = $(window).width();
    var dotWidth = $('#slider .owl-theme').find('.owl-dots').outerWidth();
    $('#slider .owl-theme .owl-dots').css('left', ((docWidth/2) - (dotWidth/2)) + "px");
    $('#slider .owl-theme .owl-dots').css('display', 'block');
}

function initMainSlider(sliderHeight){
    setTimeout(function(){
        $( ".owl-next").html('<i class="fa fa-chevron-right"></i>');
        $( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
        $( "#slider .owl-nav").fadeIn();
        $('#slider .owl-item .item, #slider .owl-item .item img').css('height', sliderHeight+'px');
        $('.slider-header').css('display','block');
        autoCenterDot();
    },1000);
}

function checkWindowSize(){
    var width = $(window).width();
    var height = $(window).height();
    return { width : width, height : height };
}

function setUpWowDelay(){
    var size = checkWindowSize();
    if(size.width <= 480)
        $('.wow').removeAttr('data-wow-delay');
}

function initScrollUp(){

    $(window).scroll(function(){
        var h = $(window).scrollTop();
        if(h>300)
            $('#scrollUp').fadeIn();
        else
            $('#scrollUp').fadeOut();
    });

}

$(document).ready(function(){

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll, .footer-menu li a, #scrollUp').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    $('#scrollUp').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });

    // SLIDER

        var docHeight = $(window).height();
        var sliderHeight = docHeight - 112;
        $('#slider .container').css('height', sliderHeight);

        var main = $('.main-carousel').owlCarousel({
            autoplay:1000,
            autoplayTimeout:10000,
            autoplayHoverPause:true,
            animateOut: 'fadeOut',
            smartSpeed: 450,
            singleItem: true,
            height:sliderHeight,
            onInitialized:initMainSlider(sliderHeight),
            items: 1
        });

        var owl = $('#portfolio .owl-carousel').owlCarousel({
            autoplay:1000,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            slideSpeed: 200,
            paginationSpeed: 600,
            smartSpeed:250,
            loop:true,
            margin:30,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:2
                },
                1000:{
                    items:2
                },
                1200:{
                    items:4
                }
            }
        });

        owl.on('mousewheel', '.owl-stage', function (e) {
            if (e.deltaY>0) {
                owl.trigger('next.owl');
            } else {
                owl.trigger('prev.owl');
            }
            e.preventDefault();
        });

    // END OF SLIDER
    
    // WOW
        
        var w = {
              boxClass:     'wow',      // default
              animateClass: 'animated', // default
              offset:       10,          // default
              mobile:       true,       // default
              live:         true        // default
            }
        var wow = new WOW(w);
        setTimeout(function(){
            setUpWowDelay();
            wow.init();
        },1000);

    //  END WOW

    // SCROLL UP
        
        initScrollUp();    


    // LISTENER
    
        $(window).resize(function() {
            autoCenterDot();
        });
        
        $('#slider .owl-carousel').on('mouseenter', function(){
            $('#slider .owl-nav, #slider .owl-dots').fadeIn();
        }).on('mouseleave', function(){
            $('#slider .owl-nav, #slider .owl-dots').fadeOut();
        });

        // var size = checkWindowSize();
        // if(size.width > 480){
        //     $('#portfolio .owl-carousel').on('mouseenter', function(){
        //         $('#portfolio .owl-nav').fadeIn('fast');
        //     }).on('mouseleave', function(){
        //         $('#portfolio .owl-nav').fadeOut('fast');
        //     });
        // }

    // END OF LISTENER

});


// (function($) {})(jQuery); // End of use strict



            

