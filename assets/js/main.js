/**
 * main.js - Fungsionalitas Global Website Katalog Produk
 * - Floating Back to Top Button
 * - Mobile Navbar auto-close
 * - Aksesibilitas & keyboard focus
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // --- 1. Floating Back to Top Logic ---
  const backToTopBtn = document.getElementById('backToTopBtn');
  
  if (backToTopBtn) {
    const toggleBackToTop = function () {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    };

    window.addEventListener('scroll', toggleBackToTop, { passive: true });
    toggleBackToTop(); // Check on initial load

    backToTopBtn.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      // Return focus to top heading or body for accessibility
      const mainHeading = document.querySelector('h1');
      if (mainHeading) {
        mainHeading.setAttribute('tabindex', '-1');
        mainHeading.focus({ preventScroll: true });
      }
    });
  }

  // --- 2. Mobile Navbar Auto-close on Link Click ---
  const navbarCollapse = document.querySelector('.navbar-collapse');
  if (navbarCollapse) {
    const navLinks = navbarCollapse.querySelectorAll('.nav-link:not(.dropdown-toggle)');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.innerWidth < 992 && navbarCollapse.classList.contains('show')) {
          // If bootstrap is available via global bootstrap object
          if (typeof bootstrap !== 'undefined' && bootstrap.Collapse) {
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
          } else {
            navbarCollapse.classList.remove('show');
          }
        }
      });
    });
  }

  // --- 3. Dynamic Current Year in Footer ---
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
});
