/* ==========================================
   LUXE STORE — Main JavaScript
   Complete E-Commerce Functionality
   ========================================== */

// ── Product Data ──
const PRODUCTS = [
  {
    id: 1,
    name: "Leather Crossbody Bag",
    category: "Bags",
    price: 189,
    oldPrice: 240,
    desc: "Handcrafted genuine leather with gold hardware and adjustable strap.",
    rating: 4.9,
    reviews: 128,
    badge: "bestseller",
    imgs: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4b4c8b?w=600&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
    ],
    specs: { Material: "Genuine Leather", Color: "Tan Brown", Dimensions: "28 × 18 × 8 cm", Strap: "Adjustable", Weight: "480g", Closure: "Magnetic Snap" }
  },
  {
    id: 2,
    name: "Minimalist Gold Watch",
    category: "Watches",
    price: 295,
    oldPrice: 380,
    desc: "Swiss movement, sapphire crystal glass, water-resistant to 50m.",
    rating: 4.8,
    reviews: 94,
    badge: "sale",
    imgs: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
      "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=600&q=80",
      "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=600&q=80",
    ],
    specs: { Movement: "Swiss Quartz", Case: "Gold Stainless Steel", Crystal: "Sapphire", Resistance: "5 ATM", Band: "Genuine Leather", Dial: "Cream White" }
  },
  {
    id: 3,
    name: "Luxury Silk Scarf",
    category: "Accessories",
    price: 120,
    oldPrice: null,
    desc: "100% mulberry silk with handrolled edges, geometric print design.",
    rating: 4.7,
    reviews: 67,
    badge: "new",
    imgs: [
      "https://images.unsplash.com/photo-1582142306909-195724d33ffc?w=600&q=80",
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&q=80",
    ],
    specs: { Material: "100% Mulberry Silk", Size: "90 × 90 cm", Edges: "Handrolled", Care: "Dry Clean Only", Origin: "Made in Italy" }
  },
  {
    id: 4,
    name: "Cashmere Sweater",
    category: "Clothing",
    price: 210,
    oldPrice: 265,
    desc: "Ultra-soft Grade A cashmere, relaxed fit, available in 6 colors.",
    rating: 4.9,
    reviews: 203,
    badge: "bestseller",
    imgs: [
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80",
    ],
    specs: { Material: "Grade A Cashmere", Fit: "Relaxed", Care: "Hand Wash Cold", Colors: "6 Available", Origin: "Made in Scotland" }
  },
  {
    id: 5,
    name: "Perfume Collection Set",
    category: "Beauty",
    price: 165,
    oldPrice: 200,
    desc: "Set of 3 signature scents: Oud, Rose, and Amber. 50ml each.",
    rating: 4.8,
    reviews: 156,
    badge: "sale",
    imgs: [
      "https://images.unsplash.com/photo-1541643600914-78b084683702?w=600&q=80",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&q=80",
    ],
    specs: { Contents: "3 × 50ml Bottles", Scents: "Oud, Rose, Amber", Type: "Eau de Parfum", Longevity: "8–12 hours", Origin: "France" }
  },
  {
    id: 6,
    name: "Gold-Plated Earrings",
    category: "Jewelry",
    price: 89,
    oldPrice: null,
    desc: "18K gold plated, hypoallergenic posts, geometric drop design.",
    rating: 4.6,
    reviews: 42,
    badge: "new",
    imgs: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80",
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&q=80",
    ],
    specs: { Material: "18K Gold Plated Brass", Posts: "Hypoallergenic Sterling Silver", Length: "4.5 cm", Weight: "6g pair", Style: "Drop" }
  },
  {
    id: 7,
    name: "Premium Sunglasses",
    category: "Accessories",
    price: 145,
    oldPrice: 180,
    desc: "Titanium frame with UV400 polarized lenses, Italian design.",
    rating: 4.7,
    reviews: 88,
    badge: "sale",
    imgs: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&q=80",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
    ],
    specs: { Frame: "Titanium", Lenses: "UV400 Polarized", Width: "140mm", Protection: "100% UVA/UVB", Case: "Hard Shell Included" }
  },
  {
    id: 8,
    name: "Leather Wallet",
    category: "Bags",
    price: 95,
    oldPrice: 120,
    desc: "Full grain leather slim wallet, 8 card slots, RFID blocking.",
    rating: 4.8,
    reviews: 174,
    badge: "bestseller",
    imgs: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&q=80",
      "https://images.unsplash.com/photo-1606503153255-59d5e417e8b5?w=600&q=80",
    ],
    specs: { Material: "Full Grain Leather", Cards: "8 Slots", RFID: "Blocking", Bill: "Full-Length Compartment", Size: "11 × 9 cm" }
  }
];

const CATEGORIES = ["All", "Bags", "Watches", "Accessories", "Clothing", "Beauty", "Jewelry"];

// ── Cart State ──
let cart = JSON.parse(localStorage.getItem('luxe_cart') || '[]');

function saveCart() {
  localStorage.setItem('luxe_cart', JSON.stringify(cart));
  updateCartUI();
}

function updateCartUI() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = count;
    el.classList.toggle('visible', count > 0);
  });
}

function addToCart(productId, qty = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const existing = cart.find(i => i.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: productId, qty });
  }
  saveCart();
  showToast(`✨ Added to cart`, product.name);
  const btn = document.querySelector(`[data-add-to-cart="${productId}"]`);
  if (btn) {
    btn.innerHTML = '✓';
    btn.style.background = 'var(--success)';
    setTimeout(() => {
      btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>';
      btn.style.background = '';
    }, 1400);
  }
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  if (typeof renderCart === 'function') renderCart();
}

function updateQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  if (typeof renderCart === 'function') renderCart();
}

function getCartTotal() {
  return cart.reduce((total, item) => {
    const product = PRODUCTS.find(p => p.id === item.id);
    return total + (product ? product.price * item.qty : 0);
  }, 0);
}

// ── Toast ──
let toastTimeout;
function showToast(icon, message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    toast.innerHTML = `<span class="toast-icon"></span><div class="toast-text"><strong></strong><span>Successfully added to your cart</span></div>`;
    document.body.appendChild(toast);
  }
  toast.querySelector('.toast-icon').textContent = icon;
  toast.querySelector('strong').textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ── Navbar ──
function initNavbar() {
  const nav = document.querySelector('.navbar');
  if (!nav) return;
  const scrolled = () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  };
  window.addEventListener('scroll', scrolled, { passive: true });
  scrolled();

  // Hamburger
  const ham = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (ham && mobileMenu) {
    ham.addEventListener('click', () => {
      ham.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        ham.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }
}

// ── Scroll Observer (Reveal Animations) ──
function initObserver() {
  const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  if (!elements.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
  elements.forEach(el => observer.observe(el));
}

// ── Product Card HTML ──
function getProductCardHTML(product) {
  const badgeMap = {
    bestseller: `<span class="badge badge-gold">Best Seller</span>`,
    new: `<span class="badge badge-new">New</span>`,
    sale: `<span class="badge badge-sale">Sale</span>`
  };
  const discountPct = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : null;

  return `
    <div class="product-card reveal" data-category="${product.category}" data-id="${product.id}">
      <div class="product-img-wrap">
        <img src="${product.imgs[0]}" alt="${product.name}" loading="lazy">
        <div class="product-badge-wrap">
          ${badgeMap[product.badge] || ''}
          ${discountPct ? `<span class="badge badge-sale">-${discountPct}%</span>` : ''}
        </div>
        <div class="product-actions">
          <button class="product-action-btn" onclick="openProduct(${product.id})" title="Quick view">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          </button>
          <button class="product-action-btn" title="Wishlist">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
          </button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-category">${product.category}</div>
        <div class="product-name">${product.name}</div>
        <div class="product-desc">${product.desc}</div>
        <div class="product-footer">
          <div class="product-price">
            <span class="price">$${product.price}</span>
            ${product.oldPrice ? `<span class="old-price">$${product.oldPrice}</span>` : ''}
          </div>
          <button class="add-cart-btn" data-add-to-cart="${product.id}" onclick="addToCart(${product.id})" title="Add to cart">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
          </button>
        </div>
      </div>
    </div>`;
}

function openProduct(id) {
  window.location.href = `product.html?id=${id}`;
}

// ── Countdown Timer ──
function initCountdown(targetHours = 12) {
  const elements = {
    h: document.getElementById('cd-hours'),
    m: document.getElementById('cd-minutes'),
    s: document.getElementById('cd-seconds'),
    d: document.getElementById('cd-days'),
  };
  if (!elements.h) return;

  let target = parseInt(sessionStorage.getItem('luxe_countdown_target') || '0');
  if (!target || target < Date.now()) {
    target = Date.now() + targetHours * 3600 * 1000;
    sessionStorage.setItem('luxe_countdown_target', target);
  }

  const tick = () => {
    const diff = Math.max(0, target - Date.now());
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    if (elements.d) elements.d.textContent = String(d).padStart(2, '0');
    elements.h.textContent = String(h).padStart(2, '0');
    elements.m.textContent = String(m).padStart(2, '0');
    elements.s.textContent = String(s).padStart(2, '0');
  };
  tick();
  setInterval(tick, 1000);
}

// ── Init on every page ──
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  updateCartUI();
  initObserver();
  initCountdown();
});