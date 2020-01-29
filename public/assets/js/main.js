/*! main.js | Bulkit | CSS Ninja */

/* ==========================================================================
Core functions execution (functions.js)
========================================================================== */
"use strict";

initPageLoader();
$(document).ready(function ($) {
  disableSidebarLinks();
  initNavbar();
  initMobileMenu();
  highlightNavbarLinks();
  initSidebar();
  initPopovers();
  initTooltips();
  initBackgroundImages();
  initBackToTop();
  initGitem();
  initScrollToHash();
  initCarousel();
  initFaq();
  initPricing();
  initPricingCarousel();
});