// ===== DATA =====
const products = [
    {
        id: 1,
        name: "Cera de Soya Aromática – Corazón",
        category: "ceras",
        aroma: "vainilla",
        price: 45,
        oldPrice: null,
        description: "Cera de soya en forma de corazón, aroma vainilla",
        size: "Individual",
        burnTime: "4-6 horas",
        featured: true,
        badge: "Más Vendida",
        image: "images/vela4.jpg"
    },
    {
        id: 2,
        name: "Cera de Soya Aromática – Flor",
        category: "ceras",
        aroma: "lavanda",
        price: 45,
        oldPrice: null,
        description: "Cera de soya en forma de flor, aroma lavanda",
        size: "Individual",
        burnTime: "4-6 horas",
        featured: true,
        badge: null,
        image: "images/vela4.jpg"
    },
    {
        id: 3,
        name: "Pack 6 Ceras de Soya – Corazones",
        category: "sets",
        aroma: "vainilla",
        price: 220,
        oldPrice: 270,
        description: "6 ceras de soya en forma de corazón rojo",
        size: "6 piezas",
        burnTime: "4-6 horas c/u",
        featured: true,
        badge: "Pack",
        image: "images/vela4.jpg"
    },
    {
        id: 4,
        name: "Pack 6 Ceras de Soya – Flores",
        category: "sets",
        aroma: "lavanda",
        price: 220,
        oldPrice: 270,
        description: "6 ceras de soya en forma de flor rosa",
        size: "6 piezas",
        burnTime: "4-6 horas c/u",
        featured: true,
        badge: "Pack",
        image: "images/vela4.jpg"
    },
    {
        id: 5,
        name: "Quemador de Cera Cerámica",
        category: "quemadores",
        aroma: "sin aroma",
        price: 280,
        oldPrice: null,
        description: "Quemador de cerámica blanca para cera de soya",
        size: "Mediano",
        burnTime: "Reutilizable",
        featured: true,
        badge: "Nuevo",
        image: "images/vela1.jpg"
    },
    {
        id: 6,
        name: "Quemador de Cera con Vela Tealight",
        category: "quemadores",
        aroma: "sin aroma",
        price: 320,
        oldPrice: null,
        description: "Quemador de cerámica con vela tealight incluida",
        size: "Mediano",
        burnTime: "Reutilizable",
        featured: true,
        badge: "Combo",
        image: "images/vela3.jpg"
    },
    {
        id: 7,
        name: "Cera de Soya en Barra – Vainilla",
        category: "ceras",
        aroma: "vainilla",
        price: 85,
        oldPrice: null,
        description: "Barra de cera de soya aromática sabor vainilla",
        size: "Barra",
        burnTime: "8-10 horas",
        featured: false,
        badge: null,
        image: "images/vela2.jpg"
    },
    {
        id: 8,
        name: "Cera de Soya en Barra – Lavanda",
        category: "ceras",
        aroma: "lavanda",
        price: 85,
        oldPrice: null,
        description: "Barra de cera de soya aromática sabor lavanda",
        size: "Barra",
        burnTime: "8-10 horas",
        featured: false,
        badge: null,
        image: "images/vela2.jpg"
    },
    {
        id: 9,
        name: "Set Completo – Quemador + Ceras",
        category: "sets",
        aroma: "varios",
        price: 450,
        oldPrice: 520,
        description: "Quemador de cerámica + 12 ceras de soya surtidas",
        size: "Combo",
        burnTime: "Varios",
        featured: true,
        badge: "Ideal para Regalo",
        image: "images/vela3.jpg"
    },
    {
        id: 10,
        name: "Set Romántico – Corazones Rojos",
        category: "sets",
        aroma: "vainilla",
        price: 180,
        oldPrice: null,
        description: "Pack de 4 corazones rojos de cera de soya + quemador mini",
        size: "Combo",
        burnTime: "4-6 horas c/u",
        featured: false,
        badge: null,
        image: "images/vela4.jpg"
    },
    {
        id: 11,
        name: "Vela Tealight Aromática",
        category: "velas",
        aroma: "vainilla",
        price: 25,
        oldPrice: null,
        description: "Vela tealight aromática para quemador",
        size: "Individual",
        burnTime: "3-4 horas",
        featured: false,
        badge: null,
        image: "images/vela3.jpg"
    },
    {
        id: 12,
        name: "Set Bienvenida Shaill",
        category: "sets",
        aroma: "varios",
        price: 580,
        oldPrice: 680,
        description: "Quemador grande + 24 ceras surtidas + vela tealight",
        size: "Combo Premium",
        burnTime: "Varios",
        featured: false,
        badge: "Más Completo",
        image: "images/vela1.jpg"
    }
];

const aromaIcons = {
    lavanda: "fa-spa",
    vainilla: "fa-ice-cream",
    citrico: "fa-lemon",
    amaderado: "fa-tree",
    floral: "fa-flower",
    varios: "fa-gift",
    "sin aroma": "fa-fire"
};

const aromaLabels = {
    lavanda: "Lavanda",
    vainilla: "Vainilla",
    citrico: "Cítricos",
    amaderado: "Amaderado",
    floral: "Floral",
    varios: "Varios aromas",
    "sin aroma": "Sin aroma"
};

const categoryLabels = {
    ceras: "Cera de Soya",
    quemadores: "Quemador",
    sets: "Set de Regalo",
    velas: "Vela"
};

// ===== CART =====
let cart = JSON.parse(localStorage.getItem('shaill_cart')) || [];
let appliedCoupon = localStorage.getItem('shaill_coupon') || null;

function saveCart() {
    localStorage.setItem('shaill_cart', JSON.stringify(cart));
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
    if (appliedCoupon === 'SHAILL10') return getCartTotal() * 0.10;
    if (appliedCoupon === 'BIENVENIDA') return getCartTotal() * 0.15;
    return 0;
}

function getFinalTotal() {
    return getCartTotal() + getShippingCost() - getDiscount();
}

function applyCoupon() {
    const input = document.getElementById('couponInput');
    const code = input.value.trim().toUpperCase();
    if (code === 'SHAILL10' || code === 'BIENVENIDA') {
        appliedCoupon = code;
        localStorage.setItem('shaill_coupon', code);
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
    const imgHtml = product.image 
        ? `<img src="${product.image}" alt="${product.name}" loading="lazy">`
        : `<i class="fas ${iconClass}"></i><span>${product.name}</span>`;

    return `
        <div class="product-card">
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            <div class="product-img">
                ${imgHtml}
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

    const catFilters = Array.from(document.querySelectorAll('.filter-cat:checked')).map(cb => cb.value);
    const aromaFilters = Array.from(document.querySelectorAll('.filter-aroma:checked')).map(cb => cb.value);
    const maxPrice = document.getElementById('priceRange') ? parseInt(document.getElementById('priceRange').value) : 1000;
    const sortValue = document.getElementById('sortSelect') ? document.getElementById('sortSelect').value : 'default';

    const urlParams = new URLSearchParams(window.location.search);
    const urlCategory = urlParams.get('categoria');
    if (urlCategory && !catFilters.includes(urlCategory)) {
        catFilters.push(urlCategory);
        document.querySelectorAll('.filter-cat').forEach(cb => {
            if (cb.value === urlCategory) cb.checked = true;
        });
    }

    let filtered = products.filter(p => {
        const catMatch = catFilters.includes(p.category);
        const aromaMatch = aromaFilters.includes(p.aroma);
        const priceMatch = p.price <= maxPrice;
        return catMatch && aromaMatch && priceMatch;
    });

    if (sortValue === 'price-asc') filtered.sort((a, b) => a.price - b.price);
    else if (sortValue === 'price-desc') filtered.sort((a, b) => b.price - a.price);
    else if (sortValue === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name));

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
        const imgHtml = product.image 
            ? `<img src="${product.image}" alt="${product.name}">`
            : `<i class="fas fa-fire"></i>`;

        return `
            <div class="cart-item">
                <div class="cart-item-img">${imgHtml}</div>
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
        const imgHtml = product.image 
            ? `<img src="${product.image}" alt="${product.name}">`
            : `<i class="fas fa-fire"></i>`;

        return `
            <div class="checkout-item">
                <div class="checkout-item-img">${imgHtml}</div>
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

    const orderNum = '#SH-' + Math.floor(1000 + Math.random() * 9000);
    document.getElementById('orderNumber').textContent = orderNum;

    document.getElementById('orderModal').classList.add('active');

    cart = [];
    appliedCoupon = null;
    localStorage.removeItem('shaill_cart');
    localStorage.removeItem('shaill_coupon');
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
