/*
    instagram
----------------------------------------*/

$(window).on('load', function(){
  var instagram_feed_username = $('#instagram_feed').attr('data-ig-name');
  $.instagramFeed({
    'username': instagram_feed_username,
    'container': "#instagram_feed",
    'display_profile': false,
    'display_biography': true,
    'display_igtv': false,
    'items': 6,
    'items_per_row': 6,
    'margin': 1
  });
});


/*
  Responsive Menu
------------------------------------------------------------------------*/
jQuery(document).ready(function($) {
  "use strict";
  
  var ph1_responsive_menu = $(".responsive-menu");
  
  $('body').on( "click", 'a.responsive-menu-hand', function() {    
    if($(".responsive-menu").hasClass('active')){
      $(".responsive-menu").slideUp();
      $(".responsive-menu").removeClass('active');
      $("body").removeClass('mobile-menu-active');
    }else{
      $(".responsive-menu").slideDown();
      $(".responsive-menu").addClass('active');
      $("body").addClass('mobile-menu-active');
    }
    return false;
  });
  
  $('body').on( "click", 'a.responsive-menu-close', function() {
    $(".responsive-menu").slideUp();
    $(".responsive-menu").removeClass('active');
    $("body").removeClass('mobile-menu-active');
  });
});

jQuery(window).scroll(function() {
  "use strict";
  
  var sa_body_scroll = jQuery(document).scrollTop();
      
  if (sa_body_scroll > 50) {
    jQuery('.sk_header').addClass('active');
  }else if(sa_body_scroll < 50){
    jQuery('.sk_header').removeClass('active');
  }
});



/*
    Slider
----------------------------------------*/



jQuery(document).ready(function($) {
  "use strict";

  $('.kp5_item_wrapper').slick({
      slidesToShow: 3,
  responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 551,
        settings: {
          slidesToShow: 1,
        }
      }
      ]
      
  });

  $('.portfolio-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
  });

  $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical:true,
      asNavFor: '.portfolio-slider',
      dots: false,
      focusOnSelect: true,
      verticalSwiping:true,
      responsive: [
      {
        breakpoint: 769,
        settings: {
          vertical: false,
        }
      },
      {
        breakpoint: 551,
        settings: {
          vertical: false,
          slidesToShow: 3,
        }
      }
      ]
  });
  

});

