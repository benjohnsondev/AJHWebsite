/* JavaScript Document */
jQuery(document).ready(function() {
    'use strict';

	/* image-carousel function by = owl.carousel.js */
	jQuery('.img-carousel').owlCarousel({
		center: true,
		autoplay:false,
		items:3,
		loop:true,
		margin:10,
		nav:false,
		dots:true,
		autoplaySpeed: 1000,
		navSpeed: 1000,
		paginationSpeed: 1000,
		slideSpeed: 1000,
		navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
		responsive:{
			0:{
				items:2
			},
			480:{
				items:2
			},			
			1024:{
				items:3
			},
			1200:{
				items:4
			}
		}
	})
	
	/* image-carousel function by = owl.carousel.js */
	jQuery('.img-carousel1').owlCarousel({
		center: true,
		autoplay:false,
		items:3,
		loop:true,
		margin:10,
		nav:false,
		dots:true,
		autoplaySpeed: 1000,
		navSpeed: 1000,
		paginationSpeed: 1000,
		slideSpeed: 1000,
		navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
		responsive:{
			0:{
				items:2
			},
			480:{
				items:2
			},			
			1024:{
				items:3
			},
			1200:{
				items:4
			}
		}
	})
	
	/* image-carousel no margin function by = owl.carousel.js */
	jQuery('.header-carousel-content').owlCarousel({
		loop:true,
		autoplay:true,
		margin:0,
		nav:false,
		dots: false,
		navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
		responsive:{
			0:{
				items:2
			},
			480:{
				items:3
			},			
			1024:{
				items:4
			},
			1200:{
				items:4
			}
		}
	})
	
});
/* Document .ready END */