(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $('.collapse').on('shown.bs.collapse', function()
		{
			$(this).prev().addClass('active');
		});
		$('.collapse').on('hidden.bs.collapse', function()
		{
			$(this).prev().removeClass('active');
		});

		// Add an Class to the <li> if has Submenu
    	$('header .menu ul li:has(ul)').addClass('has-submenu');


    	// Add class to header on scroll
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


	    // Useful Section Tab
	    $('#useful-section .tab-item:not(:first)').hide();
	     $('#useful-section .tab-buttons ul li a').click(function(e){
	     	e.preventDefault();
            $("#useful-section .tab-buttons ul li a").removeClass("active");
            $(this).addClass("active");
            $('#useful-section .tab-item').hide();
            $('#useful-section #tab-item-'+$(this).attr('data-index')).fadeIn();
        });

        if($(".carousel-style-1").length > 0) {
            var testimonialsWidth = $(".carousel-style-1 .container").width();
            var testimonialsWidthOf = $(".carousel-style-1 .container").offset(); // this will return the left and top
            var testimonialsWidthLeft = testimonialsWidthOf.left; // this will return left 
            $(".carousel-style-1 .owl-carousel").width(testimonialsWidth + testimonialsWidthLeft);
            if ($(window).width() < 768) {
               $(".carousel-style-1 .owl-carousel").width(testimonialsWidth + testimonialsWidthLeft);
            }
            else {
                $(".carousel-style-1 .owl-carousel").width(testimonialsWidth + testimonialsWidthLeft + 15);
            }
        }


        // Testimonial Section Two Masonry
        if($("#testimonial-section-two").length > 0) {
	        $('#testimonial-section-two .testimonials-box').masonry({
	            itemSelector: '#testimonial-section-two .testimonial-item',
	        });
	    }

        // Testimonial Section three Masonry
        if($("#testimonial-section-three").length > 0) {
	        $('#testimonial-section-three .testimonials-box').masonry({
	            itemSelector: '#testimonial-section-three .testimonial-item',
	        });
	    }


	    // Testimonials Carousel
        $("#testimonials-carousel").owlCarousel({
            loop: true,
            nav: true,
            navText: ['<img src="assets/img/icons/arrow-left-circle.png">', '<img src="assets/img/icons/arrow-right-circle.png">'],
            dots: false,
            margin: 36,
            responsive: {
                0: {
                    items: 1,
                },
                576: {
                    items: 1.5,
                },
                768: {
                    items: 1.7,
                },
                992: {
                    items: 1.7,
                },
                1200: {
                    items: 3.15,
                }
            }
        });


	    // Our Clinic Carousel
        $("#our-clinic-carousel").owlCarousel({
            loop: true,
            nav: true,
            navText: ['<img src="assets/img/icons/arrow-left-circle.png">', '<img src="assets/img/icons/arrow-right-circle.png">'],
            dots: false,
            margin: 36,
            responsive: {
                0: {
                    items: 1.5,
                },
                576: {
                    items: 2.5,
                },
                768: {
                    items: 2.5,
                },
                992: {
                    items: 3.5,
                }
            }
        });
        
    });


    jQuery(window).load(function(){

        if($(".carousel-style-1").length > 0) {
            var testimonialsWidthOf = $(".carousel-style-1 .container").offset(); // this will return the left and top
            var testimonialsWidthLeft = testimonialsWidthOf.left; // this will return left 
            $(".carousel-style-1 .owl-carousel .owl-nav").css("right", testimonialsWidthLeft);
        }
    });


}(jQuery));	