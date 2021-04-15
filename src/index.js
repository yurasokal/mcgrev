'use strict';

let didScroll;
let lastScrollTop = 0;
const delta = 5;
const navbarHeight = $('header').outerHeight();

$(window).scroll(function(event) {
  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  const st = $(this).scrollTop();

  if (Math.abs(lastScrollTop - st) <= delta) {
    return;
  }

  if (st > lastScrollTop && st > navbarHeight) {
    $('header').removeClass('nav-down').addClass('nav-up');
  } else {
    if (st + $(window).height() < $(document).height()) {
      $('header').removeClass('nav-up').addClass('nav-down');
    }
  }

  lastScrollTop = st;
}

// jQuery(document).ready(function() {
//   // Enter Your Class or ID
//   const $stickyMenu = jQuery('.myNav');

//   const stickyNavTop = jQuery($stickyMenu).offset().top;

//   // Get Height of Navbar Div
//   const navHeight = jQuery($stickyMenu).height();

//   const stickyNav = function() {
//     const scrollTop = jQuery(window).scrollTop();

//     if (scrollTop > stickyNavTop) {
//       jQuery($stickyMenu).addClass('sticky');
//       jQuery('html').css('padding-top', navHeight + 'px');
//     } else {
//       jQuery($stickyMenu).removeClass('sticky');
//       jQuery('html').css('padding-top', '0');
//     }
//   };

//   stickyNav();

//   jQuery(window).scroll(function() {
//     stickyNav();
//   });
// });
