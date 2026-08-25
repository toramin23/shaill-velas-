// ===== DATA =====
const products = [
    {
        id: 1,
        name: "Vela de Lavanda",
        category: "aromaticas",
        aroma: "lavanda",
        price: 280,
        oldPrice: 350,
        description: "Relajación profunda con lavanda francesa",
        size: "200g",
        burnTime: "45 horas",
        featured: true,
        badge: "Más Vendida"
    },
    {
        id: 2,
        name: "Vela de Vainilla",
        category: "aromaticas",
        aroma: "vainilla",
        price: 280,
        oldPrice: null,
        description: "Dulce y reconfortante, como un abrazo",
        size: "200g",
        burnTime: "45 horas",
        featured: true,
        badge: null
    },
    {
        id: 3,
        name: "Vela Cítrica de Naranja",
        category: "aromaticas",
        aroma: "citrico",
        price: 260,
        oldPrice: null,
        description: "Energía fresca de cítricos naturales",
        size: "200g",
        burnTime: "42 horas",
        featured: true,
        badge: "Nueva"
    },
    {
        id: 4,
        name: "Vela de Sándalo",
        category: "aromaticas",
        aroma: "amaderado",
        price: 320,
        oldPrice: null,
        description: "Calidez amaderada para momentos íntimos",
        size: "200g",
        burnTime: "48 horas",
        featured: false,
        badge: null
    },
    {
        id: 5,
        name: "Vela de Jazmín",
        category: "aromaticas",
        aroma: "floral",
        price: 300,
        oldPrice: null,
        description: "Elegancia floral que ilumina cualquier espacio",
        size: "200g",
        burnTime: "45 horas",
        featured: false,
        badge: null
    },
    {
        id: 6,
        name: "Vela Esculpida Rosa",
        category: "decorativas",
        aroma: "floral",
        price: 450,
        oldPrice: 550,
        description: "Arte en cera, una rosa que nunca marchita",
        size: "350g",
        burnTime: "60 horas",
        featured: true,
        badge: "Edición Limitada"
    },
    {
        id: 7,
        name: "Vela Geométrica Dorada",
        category: "decorativas",
        aroma: "amaderado",
        price: 380,
        oldPrice: null,
        description: "Diseño moderno que complementa cualquier decoración",
        size: "300g",
        burnTime: "55 horas",
        featured: false,
        badge: null
    },
    {
        id: 8,
        name: "Set de 3 Velas Mini",
        category: "sets",
        aroma: "varios",
        price: 520,
        oldPrice: 650,
        description: "Lavanda, vainilla y cítrico en presentación de regalo",
        size: "3 x 80g",
        burnTime: "20 horas c/u",
        featured: true,
        badge: "Ideal para Regalo"
    },
    {
        id: 9,
        name: "Set Spa en Casa",
        category: "sets",
        aroma: "lavanda",
        price: 680,
        oldPrice: null,
        description: "Vela grande + 2 velas mini + matches artesanales",
        size: "Combo",
        burnTime: "Varios",
        featured: false,
        badge: null
    },
    {
        id: 10,
        name: "Vela de Eucalipto",
        category: "aromaticas",
        aroma: "citrico",
        price: 290,
        oldPrice: null,
        description: "Frescura purificante para tu espacio de trabajo",
        size: "200g",
        burnTime: "45 horas",
        featured: false,
        badge: null
    },
    {
        id: 11,
        name: "Vela Bubble Pink",
        category: "decorativas",
        aroma: "floral",
        price: 420,
        oldPrice: null,
        description: "Forma única de burbuja en tono rosa suave",
        size: "320g",
        burnTime: "58 horas",
        featured: false,
        badge: null
    },
    {
        id: 12,
        name: "Set Bienvenida",
        category: "sets",
        aroma: "varios",
        price: 890,
        oldPrice: 1100,
        description: "4 velas medianas + portavelas de cerámica",
        size: "Combo",
        burnTime: "Varios",
        featured: false,
        badge: "Más Completo"
    }
];

const aromaIcons = {
    lavanda: "fa-spa",
    vainilla: "fa-ice-cream",
    citrico: "fa-lemon",
    amaderado: "fa-tree",
    floral: "fa-flower",
    varios: "fa-gift"
};

const aromaLabels = {
    lavanda: "Lavanda",
    vainilla: "Vainilla",
    citrico: "Cítricos",
    amaderado: "Amaderado",
    floral: "Floral",
    varios: "Varios aromas"
};

const categoryLabels = {
    aromaticas: "Aromática",
    decorativas: "Decorativa",
    sets: "Set de Regalo"
};

// ===== CART =====
let cart = JSON.parse(localStorage.getItem('lumina_cart')) || [];
let appliedCoupon = localStorage.getItem('lumina_coupon') || null;

function saveCart() {
    localStorage.setItem('lumina_cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    document.querySelectorAll('#cartCount').forEach(el => {
        el.textContent = count;
        el.style.display = count > 0 ? 'flex' : 'none';
    });
}

function addToCart(productId, qty = 1) {
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.qty += qty;
    } else {
        cart.push({ id: productId, qty });
    }
    saveCart();
    showNotification('Producto agregado al carrito');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    renderCart();
}

function updateQty(productId, qty) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.qty = Math.max(1, qty);
        saveCart();
        renderCart();
    }
}

function getCartTotal() {
    return cart.reduce((sum, item) => {
        const product = products.find(p => p.id === item.id);
        return sum + (product ? product.price * item.qty : 0);
    }, 0);
}

function getShippingCost() {
    const total = getCartTotal();
    return total >= 500 ? 0 : 99;
}

function getDiscount() {
    if (appliedCoupon === 'LUMINA10') return getCartTotal() * 0.10;
    if (appliedCoupon === 'BIENVENIDA') return getCartTotal() * 0.15;
    return 0;
}

function getFinalTotal() {
    return getCartTotal() + getShippingCost() - getDiscount();
}

function applyCoupon() {
    const input = document.getElementById('couponInput');
    const code = input.value.trim().toUpperCase();
    if (code === 'LUMINA10' || code === 'BIENVENIDA') {
        appliedCoupon = code;
        localStorage.setItem('lumina_coupon', code);
        renderCart();
        showNotification('¡Cupón aplicado!');
    } else {
        showNotification('Cupón no válido', 'error');
    }
}

// ===== NOTIFICATION =====
function showNotification(message, type = 'success') {
    const notif = document.createElement('div');
    notif.style.cssText = `
        position: fixed;
        top: 90px;
        right: 24px;
        background: ${type === 'success' ? 'var(--color-success)' : 'var(--color-danger)'};
        color: white;
        padding: 14px 24px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 500;
        z-index: 3000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        animation: slideIn 0.3s ease;
    `;
    notif.textContent = message;
    document.body.appendChild(notif);
    setTimeout(() => {
        notif.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notif.remove(), 300);
    }, 2500);
}

// ===== RENDER PRODUCT CARD =====
function createProductCard(product) {
    const iconClass = aromaIcons[product.aroma] || 'fa-fire';
    const aromaLabel = aromaLabels[product.aroma] || product.aroma;
    const catLabel = categoryLabels[product.category] || product.category;

    return `
        <div class="product-card">
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            <div class="product-img">
                <i class="fas ${iconClass}"></i>
                <span>${product.name}</span>
                <div class="product-actions">
                    <button onclick="addToCart(${product.id})" title="Agregar al carrito">
                        <i class="fas fa-shopping-bag"></i>
                    </button>
                    <button onclick="showNotification('Función de favoritos próximamente')" title="Agregar a favoritos">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <span class="product-category">${catLabel}</span>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-aroma"><i class="fas ${iconClass}"></i> ${aromaLabel} · ${product.size} · ${product.burnTime}</p>
                <div class="product-footer">
                    <span class="product-price">
                        $${product.price.toFixed(2)}
                        ${product.oldPrice ? `<span class="old-price">$${product.oldPrice.toFixed(2)}</span>` : ''}
                    </span>
                </div>
            </div>
        </div>
    `;
}

// ===== RENDER FEATURED PRODUCTS =====
function renderFeaturedProducts() {
    const container = document.getElementById('featuredProducts');
    if (!container) return;
    const featured = products.filter(p => p.featured);
    container.innerHTML = featured.map(createProductCard).join('');
}

// ===== RENDER SHOP =====
function renderShop() {
    const container = document.getElementById('shopProducts');
    if (!container) return;

    // Get filter values
    const catFilters = Array.from(document.querySelectorAll('.filter-cat:checked')).map(cb => cb.value);
    const aromaFilters = Array.from(document.querySelectorAll('.filter-aroma:checked')).map(cb => cb.value);
    const maxPrice = document.getElementById('priceRange') ? parseInt(document.getElementById('priceRange').value) : 1000;
    const sortValue = document.getElementById('sortSelect') ? document.getElementById('sortSelect').value : 'default';

    // URL category param
    const urlParams = new URLSearchParams(window.location.search);
    const urlCategory = urlParams.get('categoria');
    if (urlCategory && !catFilters.includes(urlCategory)) {
        catFilters.push(urlCategory);
        document.querySelectorAll('.filter-cat').forEach(cb => {
            if (cb.value === urlCategory) cb.checked = true;
        });
    }

    // Filter
    let filtered = products.filter(p => {
        const catMatch = catFilters.includes(p.category);
        const aromaMatch = aromaFilters.includes(p.aroma);
        const priceMatch = p.price <= maxPrice;
        return catMatch && aromaMatch && priceMatch;
    });

    // Sort
    if (sortValue === 'price-asc') filtered.sort((a, b) => a.price - b.price);
    else if (sortValue === 'price-desc') filtered.sort((a, b) => b.price - a.price);
    else if (sortValue === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name));

    // Render
    container.innerHTML = filtered.map(createProductCard).join('');

    const countEl = document.getElementById('resultsCount');
    if (countEl) countEl.textContent = `Mostrando ${filtered.length} producto${filtered.length !== 1 ? 's' : ''}`;
}

// ===== RENDER CART =====
function renderCart() {
    const itemsContainer = document.getElementById('cartItems');
    const emptyContainer = document.getElementById('cartEmpty');
    const layout = document.getElementById('cartLayout');

    if (!itemsContainer) return;

    if (cart.length === 0) {
        if (layout) layout.style.display = 'none';
        if (emptyContainer) emptyContainer.style.display = 'block';
        return;
    }

    if (layout) layout.style.display = 'grid';
    if (emptyContainer) emptyContainer.style.display = 'none';

    itemsContainer.innerHTML = cart.map(item => {
        const product = products.find(p => p.id === item.id);
        if (!product) return '';
        const iconClass = aromaIcons[product.aroma] || 'fa-fire';

        return `
            <div class="cart-item">
                <div class="cart-item-img">
                    <i class="fas ${iconClass}"></i>
                </div>
                <div class="cart-item-details">
                    <h3>${product.name}</h3>
                    <p>${aromaLabels[product.aroma]} · ${product.size}</p>
                    <span class="cart-item-price">$${(product.price * item.qty).toFixed(2)}</span>
                </div>
                <div class="cart-item-actions">
                    <div class="qty-control">
                        <button onclick="updateQty(${item.id}, ${item.qty - 1})">−</button>
                        <span>${item.qty}</span>
                        <button onclick="updateQty(${item.id}, ${item.qty + 1})">+</button>
                    </div>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})" title="Eliminar">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');

    // Update summary
    const subtotal = getCartTotal();
    const shipping = getShippingCost();
    const discount = getDiscount();
    const total = getFinalTotal();

    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('shipping').textContent = shipping === 0 ? 'Gratis' : `$${shipping.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;

    const discountRow = document.getElementById('discountRow');
    if (discount > 0) {
        discountRow.style.display = 'flex';
        document.getElementById('discount').textContent = `-$${discount.toFixed(2)}`;
    } else {
        discountRow.style.display = 'none';
    }

    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.style.display = cart.length > 0 ? 'block' : 'none';
    }
}

// ===== RENDER CHECKOUT =====
function renderCheckout() {
    const itemsContainer = document.getElementById('checkoutItems');
    if (!itemsContainer) return;

    itemsContainer.innerHTML = cart.map(item => {
        const product = products.find(p => p.id === item.id);
        if (!product) return '';
        const iconClass = aromaIcons[product.aroma] || 'fa-fire';

        return `
            <div class="checkout-item">
                <div class="checkout-item-img">
                    <i class="fas ${iconClass}"></i>
                </div>
                <div class="checkout-item-info">
                    <h4>${product.name}</h4>
                    <p>Cantidad: ${item.qty}</p>
                </div>
                <span class="checkout-item-price">$${(product.price * item.qty).toFixed(2)}</span>
            </div>
        `;
    }).join('');

    const subtotal = getCartTotal();
    const shipping = getShippingCost();
    const discount = getDiscount();
    const total = getFinalTotal();

    document.getElementById('checkoutSubtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('checkoutShipping').textContent = shipping === 0 ? 'Gratis' : `$${shipping.toFixed(2)}`;
    document.getElementById('checkoutTotal').textContent = `$${total.toFixed(2)}`;
}

// ===== PLACE ORDER =====
function placeOrder() {
    const required = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'zip', 'state'];
    let valid = true;

    required.forEach(id => {
        const el = document.getElementById(id);
        if (!el || !el.value.trim()) {
            valid = false;
            if (el) {
                el.style.borderColor = 'var(--color-danger)';
                el.addEventListener('input', () => el.style.borderColor = '');
            }
        }
    });

    if (!valid) {
        showNotification('Por favor completa todos los campos obligatorios', 'error');
        return;
    }

    if (cart.length === 0) {
        showNotification('Tu carrito está vacío', 'error');
        return;
    }

    // Generate order number
    const orderNum = '#LV-' + Math.floor(1000 + Math.random() * 9000);
    document.getElementById('orderNumber').textContent = orderNum;

    // Show modal
    document.getElementById('orderModal').classList.add('active');

    // Clear cart
    cart = [];
    appliedCoupon = null;
    localStorage.removeItem('lumina_cart');
    localStorage.removeItem('lumina_coupon');
    updateCartCount();
}

// ===== FAQ TOGGLE =====
function toggleFaq(btn) {
    const item = btn.parentElement;
    const isActive = item.classList.contains('active');

    document.querySelectorAll('.faq-item').forEach(faq => faq.classList.remove('active'));

    if (!isActive) {
        item.classList.add('active');
    }
}

// ===== MOBILE MENU =====
function initMobileMenu() {
    const toggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (toggle && navLinks) {
        toggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = toggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }
}

// ===== NAVBAR SCROLL =====
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = 'var(--shadow-md)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });
}

// ===== PRICE RANGE =====
function initPriceRange() {
    const range = document.getElementById('priceRange');
    const label = document.getElementById('priceValue');

    if (range && label) {
        range.addEventListener('input', () => {
            label.textContent = `Hasta $${range.value}`;
            renderShop();
        });
    }
}

// ===== SHOP FILTERS =====
function initShopFilters() {
    document.querySelectorAll('.filter-cat, .filter-aroma').forEach(cb => {
        cb.addEventListener('change', renderShop);
    });

    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', renderShop);
    }
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    renderFeaturedProducts();
    renderShop();
    renderCart();
    renderCheckout();
    initMobileMenu();
    initNavbarScroll();
    initPriceRange();
    initShopFilters();
});

// ===== ANIMATION STYLES =====
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100px); opacity: 0; }
    }
`;
document.head.appendChild(style);
