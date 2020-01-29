"use strict";

//Init pageloader
function initPageLoader() {
  $('.pageloader').toggleClass('is-active');
  $(window).on('load', function () {
    var pageloaderTimeout = setTimeout(function () {
      $('.pageloader').toggleClass('is-active');
      $('.infraloader').toggleClass('is-active');
      clearTimeout(pageloaderTimeout);
      setTimeout(function () {
        $('.rounded-hero').addClass('is-active');
      }, 350);
    }, 700);
  });
} //Disable sidebar links in development


function disableSidebarLinks() {
  $('.navigation-menu .is-submenu').each(function () {
    $(this).attr('href', 'javascript:void(0);');
  });
} //Change demo images


function changeDemoImages() {
  $('*[data-demo-src]').each(function () {
    var newSrc = $(this).attr('data-demo-src');

    if (newSrc !== undefined) {
      $(this).attr('src', newSrc);
    }
  });
  $('*[data-demo-background]').each(function () {
    var newBg = $(this).attr('data-demo-background');

    if (newBg !== undefined) {
      $(this).attr('data-background', newBg);
    }
  });
} //Init navbar


function initNavbar() {
  //Navbar fade
  if ($('.navbar-wrapper.navbar-fade.navbar-light').length) {
    $(".navbar-wrapper.navbar-fade").wrap('<div class="navbar-placeholder"></div>');
    $(".navbar-placeholder").height(jQuery(".navbar-wrapper.navbar-fade").outerHeight());
    $(window).on('scroll', function () {
      var height = $(window).scrollTop();

      if (height > 65) {
        $(".navbar-wrapper.navbar-fade.is-transparent").removeClass('is-transparent navbar-light').addClass('navbar-faded');
      } else {
        $(".navbar-wrapper").removeClass('navbar-faded').addClass('is-transparent navbar-light');
      }
    });
  } //Navbar fade


  if ($('.navbar-wrapper.navbar-fade.navbar-default').length) {
    $(".navbar-wrapper.navbar-fade").wrap('<div class="navbar-placeholder"></div>');
    $(".navbar-placeholder").height(jQuery(".navbar-wrapper.navbar-fade").outerHeight());
    $(window).on('scroll', function () {
      var height = $(window).scrollTop();

      if (height > 65) {
        $(".navbar-wrapper.navbar-fade.is-transparent").removeClass('is-transparent').addClass('navbar-faded');
      } else {
        $(".navbar-wrapper").removeClass('navbar-faded').addClass('is-transparent');
      }
    });
  } //Navbar Clone


  if ($('.is-cloned').length) {
    $(window).scroll(function () {
      var height = $(window).scrollTop(); //getting the scrolling height of window

      if (height > 50) {
        $(".is-cloned").addClass('is-active');
      } else {
        $(".is-cloned").removeClass('is-active');
      }
    });
  }
} //Mobile menu toggle


function initMobileMenu() {
  $('.custom-burger').on("click", function () {
    var menu_id = $(this).attr('data-target');
    $(this).toggleClass('is-active');
    $("#" + menu_id).toggleClass('is-active');
    $('.navbar.navbar-light').toggleClass('is-dark-mobile');
  });
  $('.custom-burger').on('click', function () {
    $(this).find('.icon-box-toggle').toggleClass('active');
  });
} //Highlight current page navbar menu item


function highlightNavbarLinks() {
  // Get current page URL
  var url = window.location.href; // remove # from URL

  url = url.substring(0, url.indexOf("#") == -1 ? url.length : url.indexOf("#")); // remove parameters from URL

  url = url.substring(0, url.indexOf("?") == -1 ? url.length : url.indexOf("?")); // select file name

  url = url.substr(url.lastIndexOf("/") + 1); // If file name not available

  if (url == '') {
    url = 'index.html';
  } // Loop all menu items


  $('.nav .navbar-item, li.has-children ul li a.is-submenu, a.footer-nav-link').each(function () {
    // select href
    var href = $(this).attr('href'); // Check filename

    if (url == href) {
      // Add active class
      $(this).addClass('is-active');
    }
  });
} //Init Sidebar


function initSidebar() {
  $(".navigation-menu > li.has-children a.parent-link").on("click", function (i) {
    i.preventDefault();

    if (!$(this).parent().hasClass("active")) {
      $(".navigation-menu li ul").slideUp();
      $(this).next().slideToggle();
      $(".navigation-menu li").removeClass("active");
      $(this).parent().addClass("active");
    } else {
      $(this).next().slideToggle();
      $(".navigation-menu li").removeClass("active");
    }
  }); //sidebar category toggle

  $('.category-link').on("click", function () {
    $('.category-link.is-active').removeClass('is-active');
    $(this).addClass('is-active');
  }); //Sidebar close button

  $('.hamburger-btn').on("click", function () {
    $('#navigation-trigger .menu-toggle .icon-box-toggle, .navigation-close .menu-toggle .icon-box-toggle, .navigation-trigger .menu-toggle .icon-box-toggle, .navigation-close .menu-toggle .icon-box-toggle').toggleClass('active');
  }); //Menu buttons sync

  $('#navigation-trigger, .navigation-trigger, .navigation-close').on("click", function () {
    $('.side-navigation-menu').toggleClass('is-active');
  }); //Data navigation menu setup

  $('.category-link').on("click", function () {
    var category_id = $(this).attr('data-navigation-menu');
    $('.navigation-menu-wrapper').addClass('is-hidden');
    $("#" + category_id).removeClass('is-hidden');
  }); //Manage close links visibility to display only one at a time

  $('.side-navigation-menu').on("mouseenter", function () {
    $('#navigation-trigger').css('opacity', '0');
    $('.navigation-close').css('opacity', '1');
  });
  $('.side-navigation-menu').on("mouseleave", function () {
    $('#navigation-trigger').css('opacity', '1');
    $('.navigation-close').css('opacity', '0');
  });
} //Carousel


function initCarousel() {
  $('.testimonials-solo-carousel').slick({
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: "<div class='slick-custom is-prev'><i class='fa fa-chevron-left'></i></div>",
    nextArrow: "<div class='slick-custom is-next'><i class='fa fa-chevron-right'></i></div>",
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: false,
        slidesToShow: 1
      }
    }, {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: false,
        slidesToShow: 1
      }
    }]
  });
} //Init FAQ


function initFaq() {
  $('.faq-block .block-header').on('click', function () {
    $(this).toggleClass('is-active');
    $(this).closest('.faq-block').find('.block-body').slideToggle('fast');
  });
} //Init Scroll Reveal


function initScrollReveal() {
  // Declaring defaults
  window.sr = ScrollReveal(); // Simple reveal

  sr.reveal('.is-title-reveal', {
    origin: 'bottom',
    distance: '20px',
    duration: 600,
    delay: 100,
    rotate: {
      x: 0,
      y: 0,
      z: 0
    },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    container: window.document.documentElement,
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.2
  }); // Revealing multiple cards

  sr.reveal('.is-card-reveal', {
    origin: 'bottom',
    distance: '20px',
    duration: 600,
    delay: 100,
    rotate: {
      x: 0,
      y: 0,
      z: 0
    },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    container: window.document.documentElement,
    mobile: true,
    reset: true,
    useDelay: 'always',
    viewFactor: 0.2
  }, 160);
} //Popovers


function initPopovers() {
  if ($('[data-toggle="popover"]').length) {
    $('[data-toggle="popover"]').ggpopover();
  }
} //Tooltips


function initTooltips() {
  if ($('[data-toggle="tooltip"]').length) {
    $('[data-toggle="tooltip"]').ggtooltip();
  }
} //Init attribute background images


function initBackgroundImages() {
  $(".has-background-image").each(function () {
    var bgImage = $(this).attr('data-background');

    if (bgImage !== undefined) {
      $(this).css('background-image', 'url(' + bgImage + ')');
    }
  });
} //Back to top button


function initBackToTop() {
  var pxShow = 600;
  var scrollSpeed = 500;
  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= pxShow) {
      $("#backtotop").addClass('visible');
    } else {
      $("#backtotop").removeClass('visible');
    }
  });
  $('#backtotop a').on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, scrollSpeed);
    return false;
  });
} //Gelatine items


function initGitem() {
  $('.g-item').on("mouseenter", function () {
    $(this).addClass('gelatine');
  });
  $('.g-item').on("mouseleave", function () {
    $(this).removeClass('gelatine');
  });
} //Scroll to hash


function initScrollToHash() {
  $('a[href*="#"]') // Remove links that don't actually link to anything
  .not('[href="#"]').not('[href="#0"]').on('click', function (event) {
    // On-page links
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']'); // Does a scroll target exist?

      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 550, function () {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();

          if ($target.is(":focus")) {
            // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable

            $target.focus(); // Set focus again
          }

          ;
        });
      }
    }
  });
} //Init Pricing


function initPricing() {
  $('.pricing-tabs .tab-item').on('click', function () {
    var target = $(this).attr('data-tab');
    $(this).siblings('.tab-item').removeClass('is-active');
    $(this).addClass('is-active');
    $('.pricing-container').removeClass('is-active');
    $('#' + target).addClass('is-active'); // Manually refresh positioning of slick

    $('.feature-carousel').slick('setPosition');
  });
} //Carousel


function initPricingCarousel() {
  $('.feature-carousel').slick({
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: "<div class='slick-custom is-prev'><i class='fa fa-chevron-left'></i></div>",
    nextArrow: "<div class='slick-custom is-next'><i class='fa fa-chevron-right'></i></div>",
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: false,
        slidesToShow: 1
      }
    }, {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: false,
        slidesToShow: 1
      }
    }]
  });
}