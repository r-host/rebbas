$(document).ready(function(){

	"use strict";
	
	/* =================================
	LOADER 
	=================================== */
	$(".loader").delay(400).fadeOut();
    $(".animationload").delay(400).fadeOut("fast");
	
	/* =================================
	NAVBAR 
	=================================== */
	jQuery(window).scroll(function () {
		var top = jQuery(document).scrollTop();
		var batas = jQuery(window).height();
		var header = jQuery('#header');

		if ( top > batas ) {
			$('.navbar-main').addClass('stiky');
			$('.navbar-nav').addClass('navbar-right');
		}else {
			if( header.hasClass('header-1') || header.hasClass('header-2') || header.hasClass('header-4')){
				$('.navbar-main').removeClass('stiky'); 
			}else{
				$('.navbar-main').removeClass('stiky'); 
				$('.navbar-nav').removeClass('navbar-right');
			}
			

		}
	});
	

	//
	//$(document).ready(function(){
    var navbar = $('.navbar-main');
    var submitIcon = $('.searchbox-icon');
    var inputBox = $('.searchbox-input');
    var searchBox = $('.searchbox');
    var isOpen = false;
    submitIcon.click(function(){
        if(isOpen == false){
            navbar.addClass('open');
            searchBox.addClass('searchbox-open');
            inputBox.focus();
            isOpen = true;
        } else {
            navbar.removeClass('open');
            searchBox.removeClass('searchbox-open');
            inputBox.focusout();
            isOpen = false;
        }
    });  
    submitIcon.mouseup(function(){
        return false;
    });
    searchBox.mouseup(function(){
        return false;
    });
    $(document).mouseup(function(){
        if(isOpen == true){
            $('.searchbox-icon').css('display','block');
            submitIcon.click();
        }
    });
    //});
    function buttonUp(){
        var inputVal = $('.searchbox-input').val();
        inputVal = $.trim(inputVal).length;
        if( inputVal !== 0){
            $('.searchbox-icon').css('display','none');
        } else {
            $('.searchbox-input').val('');
            $('.searchbox-icon').css('display','block');
        }
    }
	

	/* =================================
	BANNER ROTATOR IMAGE 
	=================================== */
	$('#slides').superslides({
		//animation: "fade",
		play: 5000,
		slide_speed: 800,
		pagination: true,
		hashchange: false,
		scrollable: true,
		
	});
	
	/* =================================
	COUNTER
	=================================== */
	$('.counter').counterUp({
        delay: 10,
        time: 1000
    });


	/* =================================
	OWL
	=================================== */
	
	var caro = $("#caro");
	caro.owlCarousel({
		items: 1,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		loop: true,
	});
	
	var owl = $("#owl-testimony");
	owl.owlCarousel({
		autoplay: 5000,
		stopOnHover: true,
		margin: 30,
		items : 3,
		//nav: true,
		//navText: ["<span class='fa fa-chevron-left'></span>", "<span class='fa fa-chevron-right'></span>"],
		dots: true,
		loop: true,
		responsive:{
			0:{
				items:1
			},
			1000:{
				items:3
			}
		}
	});

	var testimony2 = $("#testimony2");
	testimony2.owlCarousel({
		autoplay: 5000,
		stopOnHover: true,
		margin: 30,
		items : 2,
		//nav: true,
		//navText: ["<span class='fa fa-chevron-left'></span>", "<span class='fa fa-chevron-right'></span>"],
		dots: true,
		loop: true,
		responsive:{
			0:{
				items:1
			},
			1000:{
				items:2
			}
		}
	});

	var popularPost = $("#popular-post");
	popularPost.owlCarousel({
		items: 1,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		loop: true,
		margin: 10,
	});
	
	/* =================================
	FAQ
	=================================== */	
	$(".panel").on("show.bs.collapse hide.bs.collapse", function(e) {
	    if (e.type=='show'){
	      $(this).addClass('active');
	    }else{
	      $(this).removeClass('active');
	    }
  	});  
	
	/* =================================
	ISOTOP
	=================================== */	

	$(window).load(function(){
		// INITIALIZE ISOTOPE
		$('.list-column').isotope({
			itemSelector: '.news-item'
		});

		var $container = $('.portfolio-isotop');
		$container.isotope({
			filter: '*',
		});

	 	$('.portfolio_filter a').on('click', function() {
	 		$('.portfolio_filter .active').removeClass('active');
			$(this).addClass('active');
	 
			var selector = $(this).attr('data-filter');
			$container.isotope({
				filter: selector,
				animationOptions: {
					duration: 500,
					animationEngine : "jquery"
				}
			});
			return false;
	 	});
	});

	/* =================================
	SCROLL TO
	=================================== */
	$('a[href^="#"]').on('click', function(event) {

	    var target = $(this.getAttribute('href'));

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').stop().animate({
	            scrollTop: target.offset().top
	        }, 1000);
	    }

	});

	/* =================================
	MAGNIFIC POPUP
	=================================== */
	$('.portfolio-isotop').magnificPopup({
		delegate: 'a.btnzoom',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});

});




  
  