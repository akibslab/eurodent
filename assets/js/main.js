(function ($) {
	"use strict";

    jQuery(document).ready(function($){

		// Add an Class to the <li> if has Submenu
    	$('header .menu ul li:has(ul)').addClass('has-submenu');

    	// Slicknav
		$('#main-menu').slicknav({
	        closeOnClick: true,
	        label: '',
	        appendTo:'.mobile-menu',
	    });
        
    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	