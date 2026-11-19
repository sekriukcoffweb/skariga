/**
 * article.js - Interaktivitas Halaman Artikel
 * Mengatur buka-tutup TOC (Table of Contents), smooth scroll, dan share copy-link.
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // 1. TOC Toggle (Buka Tutup Otomatis)
  const tocToggleBtn = document.getElementById('tocToggleBtn');
  const tocBody = document.getElementById('tocBody');
  const tocArrow = document.getElementById('tocArrow');

  if (tocToggleBtn && tocBody) {
    tocToggleBtn.addEventListener('click', function () {
      tocBody.classList.toggle('collapsed');
      if (tocArrow) {
        tocArrow.innerHTML = tocBody.classList.contains('collapsed') ? '&#9654;' : '&#9660;';
      }
    });
  }

  // 2. Smooth Scroll for TOC links
  const tocLinks = document.querySelectorAll('.article-toc-list a');
  tocLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          history.pushState(null, null, targetId);
        }
      }
    });
  });

  // 3. Copy Link Share Button
  const copyBtn = document.getElementById('btnShareCopy');
  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      const url = window.location.href;
      navigator.clipboard.writeText(url).then(function () {
        const origText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<span>&check; Tersalin!</span>';
        setTimeout(function () {
          copyBtn.innerHTML = origText;
        }, 2000);
      }).catch(function () {
        alert('Tautan artikel: ' + url);
      });
    });
  }
});
