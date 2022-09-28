(function ($) {

    "use strict";
    // data - background
  
    $("[data-background]").each(function () {
      $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
  
    })

    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

    $('.popup-img').magnificPopup({
        type: 'image'
    });

      $('.popup-video').magnificPopup({
        type: 'iframe'
    });
        // brand-active
        $('.brand-active').slick({
          dots: false,
          arrows: false,
          infinite: true,
          speed: 300,
          slidesToShow: 5,
          slidesToScroll: 1,
          responsive: [
              {
                  breakpoint: 1024,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      infinite: true,
                      dots: false
                  }
              },
              {
                  breakpoint: 991,
                  settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1
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


    $('.testimonial-item-active').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.testimonial-nav'
  });
  $('.testimonial-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.testimonial-item-active',
      dots: false,
      prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
      nextArrow:'<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
      centerMode: true,
      focusOnSelect: true,
      centerPadding:0
  });
    
    $('#mobile-menu-active').meanmenu({
        meanScreenWidth:991,
        meanMenuContainer:'.mobible-menu',
    }); 

// Slider active
function mainSlider() {
	var BasicSlider = $('.slider-active');
	BasicSlider.on('init', function(e, slick) {
		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});
	BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: false,
		autoplaySpeed: 10000,
		dots: false,
		fade: true,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
		responsive: [
			{ breakpoint: 767, settings: { dots: false, arrows: false } }
		]
	});

	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function() {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function() {
				$this.removeClass($animationType);
			});
		});
	}
}
mainSlider();
// Active WOW js
new WOW().init();






  
  })(jQuery);