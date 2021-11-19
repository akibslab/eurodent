(function ($) {
	"use strict";

    jQuery(document).ready(function($){

		// Add an Class to the <li> if has Submenu
    	$('header .menu ul li:has(ul)').addClass('has-submenu');


    	$(window).scroll(function() {    
		    var scroll = $(window).scrollTop();

		    if (scroll >= 150) {
		        $("header").addClass("active");
		    } else {
		        $("header").removeClass("active");
		    }
		});


    	// Slicknav
		$('#main-menu').slicknav({
	        closeOnClick: true,
	        label: '',
	        appendTo:'.mobile-menu',
	    });


		var testimonialsWidth = $("#testimonials-section .container").width();
	    var testimonialsWidthOf = $("#testimonials-section .container").offset(); // this will return the left and top
	    var testimonialsWidthLeft = testimonialsWidthOf.left; // this will return left 
	    $("#testimonials-section #testimonials-carousel").width(testimonialsWidth + testimonialsWidthLeft + 15);



	    // Testimonials Carousel
        $("#testimonials-carousel").owlCarousel({
            loop: true,
            nav: true,
            navText: ['<img src="assets/img/icons/arrow-left-circle.png">', '<img src="assets/img/icons/arrow-right-circle.png">'],
            dots: false,
            margin: 36,
            responsive: {
                0: {
                    items: 1.15,
                },
                576: {
                    items: 2.15,
                },
                768: {
                    items: 2.15,
                },
                992: {
                    items: 3.15,
                }
            }
        });
        
    });


    jQuery(window).load(function(){
    	var testimonialsWidthOf = $("#testimonials-section .container").offset(); // this will return the left and top
	    var testimonialsWidthLeft = testimonialsWidthOf.left; // this will return left 
	    $("#testimonials-section #testimonials-carousel .owl-nav").css("right", testimonialsWidthLeft);
    });


}(jQuery));	