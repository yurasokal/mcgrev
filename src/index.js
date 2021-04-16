'use strict';

(function ($) {
  $(function(){
    $('.toggle').on('click', function() {
      $(this).closest('.menu').toggleClass('menu-open');
    });
  });
})(jQuery);

$(document).ready(function() {
  $('.support__prev').on('click', function() {
    // eslint-disable-next-line no-use-before-define
    var currentImg = $('.support__active');
    var prevImg = currentImg.prev();

    if (prevImg.length) {
      currentImg.removeClass('support__active').css('z-index', -10);
      prevImg.addClass('support__active').css('z-index', 10);
    }
  })

  $('.support__next').on('click', function() {
    var currentImg = $('.support__active');
    var nextImg = currentImg.next();

    if (nextImg.length) {
      currentImg.removeClass('support__active').css('z-index', -10);
      nextImg.addClass('support__active').css('z-index', 10);
    }
  })
});

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

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
  var st = $(this).scrollTop();

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
