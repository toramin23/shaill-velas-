// ===== ADMIN PANEL =====

// Default products (copia de main.js para referencia)
const defaultProducts = [
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

// Cargar productos
let adminProducts = JSON.parse(localStorage.getItem('shaill_products')) || JSON.parse(JSON.stringify(defaultProducts));
let editingId = null;
let currentImageBase64 = null;

// ===== SAVE TO LOCALSTORAGE =====
function saveToStorage() {
    localStorage.setItem('shaill_products', JSON.stringify(adminProducts));
    updateStats();
}

// ===== UPDATE STATS =====
function updateStats() {
    document.getElementById('totalProducts').textContent = adminProducts.length;
    document.getElementById('featuredProducts').textContent = adminProducts.filter(p => p.featured).length;
    const avg = adminProducts.length > 0 
        ? adminProducts.reduce((sum, p) => sum + p.price, 0) / adminProducts.length 
        : 0;
    document.getElementById('avgPrice').textContent = '$' + avg.toFixed(0);
}

// ===== RENDER PRODUCT LIST =====
function renderAdminList() {
    const container = document.getElementById('productList');
    const search = document.getElementById('searchInput').value.toLowerCase();

    let filtered = adminProducts;
    if (search) {
        filtered = adminProducts.filter(p => p.name.toLowerCase().includes(search));
    }

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-box-open"></i>
                <h3>No hay productos</h3>
                <p>Agrega tu primer producto o ajusta la búsqueda</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(product => {
        const imgHtml = product.image && product.image.startsWith('data:')
            ? `<img src="${product.image}" alt="${product.name}">`
            : (product.image 
                ? `<img src="${product.image}" alt="${product.name}" onerror="this.parentElement.innerHTML='<i class=\'fas fa-fire\'></i>'">`
                : `<i class="fas fa-fire"></i>`);

        const badgeHtml = product.badge ? `<span style="background:var(--color-primary);color:white;padding:2px 10px;border-radius:12px;font-size:11px;margin-left:8px">${product.badge}</span>` : '';
        const featuredIcon = product.featured ? '<i class="fas fa-star" style="color:var(--color-accent);margin-left:6px"></i>' : '';

        return `
            <div class="product-row">
                <div class="product-row-img">${imgHtml}</div>
                <div class="product-row-info">
                    <h4>${product.name} ${badgeHtml} ${featuredIcon}</h4>
                    <p>${product.category} · ${product.aroma} · ${product.size} · ${product.burnTime}</p>
                </div>
                <div class="product-row-price">
                    $${product.price.toFixed(2)}
                    ${product.oldPrice ? `<div style="font-size:13px;color:var(--color-text-muted);text-decoration:line-through">$${product.oldPrice.toFixed(2)}</div>` : ''}
                </div>
                <div class="product-row-actions">
                    <button class="btn-edit" onclick="editProduct(${product.id})" title="Editar">
                        <i class="fas fa-pen"></i>
                    </button>
                    <button class="btn-delete" onclick="deleteProduct(${product.id})" title="Eliminar">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// ===== MODAL =====
function openModal(productId = null) {
    editingId = productId;
    currentImageBase64 = null;

    const modal = document.getElementById('productModal');
    const title = document.getElementById('modalTitle');

    // Reset form
    document.getElementById('prodName').value = '';
    document.getElementById('prodPrice').value = '';
    document.getElementById('prodOldPrice').value = '';
    document.getElementById('prodCategory').value = 'ceras';
    document.getElementById('prodAroma').value = 'vainilla';
    document.getElementById('prodSize').value = '';
    document.getElementById('prodBurnTime').value = '';
    document.getElementById('prodDesc').value = '';
    document.getElementById('prodImagePath').value = '';
    document.getElementById('prodFeatured').checked = false;
    document.getElementById('imagePreview').innerHTML = '<i class="fas fa-image"></i>';

    // Reset badges
    document.querySelectorAll('.badge-option').forEach(b => b.classList.remove('active'));
    document.querySelector('.badge-option[data-value=""]').classList.add('active');

    if (productId) {
        const product = adminProducts.find(p => p.id === productId);
        if (product) {
            title.textContent = 'Editar Producto';
            document.getElementById('prodName').value = product.name;
            document.getElementById('prodPrice').value = product.price;
            document.getElementById('prodOldPrice').value = product.oldPrice || '';
            document.getElementById('prodCategory').value = product.category;
            document.getElementById('prodAroma').value = product.aroma;
            document.getElementById('prodSize').value = product.size;
            document.getElementById('prodBurnTime').value = product.burnTime;
            document.getElementById('prodDesc').value = product.description;
            document.getElementById('prodImagePath').value = product.image || '';
            document.getElementById('prodFeatured').checked = product.featured;

            // Set badge
            document.querySelectorAll('.badge-option').forEach(b => {
                b.classList.toggle('active', b.dataset.value === (product.badge || ''));
            });

            // Preview image
            updatePreview(product.image);
        }
    } else {
        title.textContent = 'Nuevo Producto';
    }

    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('productModal').classList.remove('active');
    editingId = null;
    currentImageBase64 = null;
}

// ===== IMAGE HANDLING =====
function handleImageUpload(input) {
    const file = input.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        currentImageBase64 = e.target.result;
        document.getElementById('prodImagePath').value = '[Imagen cargada]';
        updatePreview(currentImageBase64);
    };
    reader.readAsDataURL(file);
}

function updatePreview(src) {
    const preview = document.getElementById('imagePreview');
    if (src && src !== '[Imagen cargada]') {
        preview.innerHTML = `<img src="${src}" alt="Preview" onerror="this.parentElement.innerHTML='<i class=\'fas fa-image\'></i>'">`;
    } else {
        preview.innerHTML = '<i class="fas fa-image"></i>';
    }
}

function updatePreviewFromPath() {
    const path = document.getElementById('prodImagePath').value.trim();
    if (path && path !== '[Imagen cargada]') {
        updatePreview(path);
        currentImageBase64 = null;
    }
}

// ===== BADGE SELECTOR =====
function selectBadge(el) {
    document.querySelectorAll('.badge-option').forEach(b => b.classList.remove('active'));
    el.classList.add('active');
}

// ===== SAVE PRODUCT =====
function saveProduct() {
    const name = document.getElementById('prodName').value.trim();
    const price = parseFloat(document.getElementById('prodPrice').value);
    const oldPrice = document.getElementById('prodOldPrice').value ? parseFloat(document.getElementById('prodOldPrice').value) : null;
    const category = document.getElementById('prodCategory').value;
    const aroma = document.getElementById('prodAroma').value;
    const size = document.getElementById('prodSize').value.trim();
    const burnTime = document.getElementById('prodBurnTime').value.trim();
    const description = document.getElementById('prodDesc').value.trim();
    const featured = document.getElementById('prodFeatured').checked;
    const imagePath = document.getElementById('prodImagePath').value.trim();
    const badgeEl = document.querySelector('.badge-option.active');
    const badge = badgeEl ? badgeEl.dataset.value || null : null;

    if (!name || isNaN(price) || price <= 0) {
        alert('Por favor completa el nombre y el precio del producto.');
        return;
    }

    // Determine image
    let image = null;
    if (currentImageBase64) {
        image = currentImageBase64;
    } else if (imagePath && imagePath !== '[Imagen cargada]') {
        image = imagePath;
    }

    if (editingId) {
        // Update existing
        const index = adminProducts.findIndex(p => p.id === editingId);
        if (index !== -1) {
            adminProducts[index] = {
                ...adminProducts[index],
                name,
                price,
                oldPrice,
                category,
                aroma,
                size,
                burnTime,
                description,
                featured,
                badge,
                ...(image && { image })
            };
        }
    } else {
        // Create new
        const newId = adminProducts.length > 0 ? Math.max(...adminProducts.map(p => p.id)) + 1 : 1;
        adminProducts.push({
            id: newId,
            name,
            price,
            oldPrice,
            category,
            aroma,
            size,
            burnTime,
            description,
            featured,
            badge,
            image: image || 'images/vela1.jpg'
        });
    }

    saveToStorage();
    renderAdminList();
    closeModal();
    showAdminNotification(editingId ? 'Producto actualizado' : 'Producto creado');
}

// ===== EDIT PRODUCT =====
function editProduct(id) {
    openModal(id);
}

// ===== DELETE PRODUCT =====
function deleteProduct(id) {
    if (!confirm('¿Estás segura de eliminar este producto?')) return;
    adminProducts = adminProducts.filter(p => p.id !== id);
    saveToStorage();
    renderAdminList();
    showAdminNotification('Producto eliminado');
}

// ===== EXPORT DATA =====
function exportData() {
    const data = {
        products: adminProducts,
        exportedAt: new Date().toISOString(),
        version: '1.0'
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'shaill-products.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showAdminNotification('Datos exportados correctamente');
}

// ===== IMPORT DATA =====
function importData(input) {
    const file = input.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            if (data.products && Array.isArray(data.products)) {
                adminProducts = data.products;
                saveToStorage();
                renderAdminList();
                showAdminNotification('Datos importados correctamente');
            } else {
                alert('El archivo no tiene el formato correcto.');
            }
        } catch (err) {
            alert('Error al leer el archivo: ' + err.message);
        }
    };
    reader.readAsText(file);
    input.value = '';
}

// ===== RESET DATA =====
function resetData() {
    if (!confirm('¿Estás segura? Esto restaurará todos los productos a los valores por defecto.')) return;
    adminProducts = JSON.parse(JSON.stringify(defaultProducts));
    saveToStorage();
    renderAdminList();
    showAdminNotification('Datos restaurados a default');
}

// ===== PREVIEW STORE =====
function previewStore() {
    window.open('index.html', '_blank');
}

// ===== NOTIFICATION =====
function showAdminNotification(message) {
    const notif = document.createElement('div');
    notif.style.cssText = `
        position: fixed;
        top: 90px;
        right: 24px;
        background: var(--color-success);
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

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    updateStats();
    renderAdminList();
    initMobileMenu();
});

// Close modal on outside click
document.getElementById('productModal').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
});
