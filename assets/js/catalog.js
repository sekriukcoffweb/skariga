/**
 * catalog.js - Filter, Pencarian, & Pengurutan Katalog Produk Client-Side
 * Berjalan sepenuhnya di browser tanpa library eksternal.
 * Mendukung filter kategori, pencarian real-time, reset filter, dan sorting harga/rating.
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  const searchInput = document.getElementById('catalogSearchInput');
  const filterButtons = document.querySelectorAll('.catalog-pill-btn, .filter-btn');
  const productCards = document.querySelectorAll('.catalog-item, .card-stitch-wrapper');
  const emptyState = document.getElementById('catalogEmptyState');
  const resultCounter = document.getElementById('catalogResultCount');
  const resetBtn = document.getElementById('btnResetFilter');
  const sortSelect = document.getElementById('catalogSortSelect');
  const catalogGrid = document.getElementById('catalogGrid');
  const totalProducts = productCards.length;

  let currentCategory = 'all';
  let searchQuery = '';

  function filterProducts() {
    let visibleCount = 0;
    const query = searchQuery.trim().toLowerCase();

    productCards.forEach(function (card) {
      const cardCategory = card.getAttribute('data-category') || '';
      const titleEl = card.querySelector('.card-stitch-title') || card.querySelector('.card-product-title');
      const descEl = card.querySelector('.card-stitch-desc') || card.querySelector('.card-product-desc');
      const cardTitle = (titleEl ? titleEl.textContent : '').toLowerCase();
      const cardDesc = (descEl ? descEl.textContent : '').toLowerCase();
      const cardTags = (card.getAttribute('data-tags') || '').toLowerCase();

      const matchesCategory = (currentCategory === 'all' || cardCategory === currentCategory);
      const matchesSearch = query === '' || 
                            cardTitle.includes(query) || 
                            cardDesc.includes(query) || 
                            cardTags.includes(query);

      if (matchesCategory && matchesSearch) {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    // Update Result Counter
    if (resultCounter) {
      resultCounter.textContent = `Menampilkan ${visibleCount} dari ${totalProducts} produk artisan`;
    }

    // Toggle Empty State
    if (emptyState) {
      if (visibleCount === 0) {
        emptyState.classList.remove('d-none');
      } else {
        emptyState.classList.add('d-none');
      }
    }
  }

  // Handle Search Input (Debounced)
  if (searchInput) {
    let debounceTimer;
    searchInput.addEventListener('input', function (e) {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(function () {
        searchQuery = e.target.value;
        filterProducts();
      }, 120);
    });

    // Clear search on Escape
    searchInput.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        searchInput.value = '';
        searchQuery = '';
        filterProducts();
      }
    });
  }

  // Reset Filter Button
  if (resetBtn) {
    resetBtn.addEventListener('click', function () {
      if (searchInput) searchInput.value = '';
      searchQuery = '';
      currentCategory = 'all';
      filterButtons.forEach(b => b.classList.remove('active'));
      const allBtn = document.querySelector('.catalog-pill-btn[data-filter="all"], .filter-btn[data-filter="all"]');
      if (allBtn) allBtn.classList.add('active');
      if (sortSelect) sortSelect.value = 'default';
      filterProducts();
    });
  }

  // Handle Category Buttons
  if (filterButtons.length > 0) {
    filterButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-filter') || 'all';
        filterProducts();
      });
    });
  }

  // Handle Sorting
  if (sortSelect && catalogGrid) {
    sortSelect.addEventListener('change', function () {
      const val = sortSelect.value;
      const cardsArr = Array.from(productCards);

      cardsArr.sort(function (a, b) {
        const priceA = parseInt(a.getAttribute('data-price') || '0', 10);
        const priceB = parseInt(b.getAttribute('data-price') || '0', 10);
        const ratingA = parseFloat(a.getAttribute('data-rating') || '0');
        const ratingB = parseFloat(b.getAttribute('data-rating') || '0');

        if (val === 'price-low') {
          return priceA - priceB;
        } else if (val === 'price-high') {
          return priceB - priceA;
        } else if (val === 'rating') {
          return ratingB - ratingA;
        } else {
          const orderA = parseInt(a.getAttribute('data-order') || '0', 10);
          const orderB = parseInt(b.getAttribute('data-order') || '0', 10);
          return orderA - orderB;
        }
      });

      cardsArr.forEach(function (card) {
        catalogGrid.appendChild(card);
      });
    });
  }

  // Initial Counter Setup
  if (resultCounter) {
    resultCounter.textContent = `Menampilkan ${totalProducts} dari ${totalProducts} produk artisan`;
  }
});
