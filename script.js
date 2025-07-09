// Datos del catálogo actualizado con rutas corregidas
const products = [
  {
    id: 1,
    name: "TechnoMarine Azul Clásico",
    price: "$650.000",
    originalPrice: "$850.000",
    category: "technomarine",
    brand: "TechnoMarine",
    image: "images/1.jpg",
    description:
      "Elegante reloj TechnoMarine con esfera azul rayada y acabados de acero inoxidable. Perfecto para ocasiones especiales y uso diario.",
    features: ["Cuarzo Suizo", "Esfera Rayada", "Acero Inoxidable", "Fecha", "Resistente al Agua"],
    badge: "Bestseller",
    inStock: true,
    specifications: {
      Diámetro: "40mm",
      Grosor: "10mm",
      "Material Caja": "Acero Inoxidable",
      Resistencia: "50m",
      Movimiento: "Cuarzo Suizo",
    },
  },
  {
    id: 2,
    name: "TechnoMarine Rosa Dorado",
    price: "$720.000",
    originalPrice: "$950.000",
    category: "technomarine",
    brand: "TechnoMarine",
    image: "images/2.jpg",
    description:
      "Hermoso reloj dorado con esfera rosa texturizada. Diseño femenino y sofisticado que combina elegancia y modernidad.",
    features: ["Baño de Oro", "Esfera Rosa", "Cuarzo Precisión", "Fecha", "Elegante"],
    badge: "Femenino",
    inStock: true,
    specifications: {
      Diámetro: "38mm",
      Grosor: "9mm",
      "Material Caja": "Acero con Baño de Oro",
      Resistencia: "30m",
      Movimiento: "Cuarzo Japonés",
    },
  },
  {
    id: 3,
    name: "TechnoMarine Turquesa Único",
    price: "$750.000",
    originalPrice: "$1.000.000",
    category: "technomarine",
    brand: "TechnoMarine",
    image: "images/3.jpg",
    description:
      "Espectacular reloj con esfera turquesa que destaca por su color único y vibrante. Perfecto para quienes buscan diferenciarse.",
    features: ["Baño de Oro", "Esfera Turquesa", "Único", "Llamativo", "Moderno"],
    badge: "Único",
    inStock: true,
    specifications: {
      Diámetro: "40mm",
      Grosor: "10mm",
      "Material Caja": "Acero con Baño de Oro",
      Resistencia: "50m",
      Movimiento: "Cuarzo Suizo",
    },
  },
  {
    id: 4,
    name: "TechnoMarine Blanco Dorado",
    price: "$680.000",
    originalPrice: "$900.000",
    category: "technomarine",
    brand: "TechnoMarine",
    image: "images/4.jpg",
    description:
      "Reloj dorado con esfera blanca rayada. Combinación perfecta de elegancia clásica y diseño contemporáneo.",
    features: ["Baño de Oro", "Esfera Blanca", "Clásico", "Fecha", "Elegante"],
    badge: "Clásico",
    inStock: true,
    specifications: {
      Diámetro: "40mm",
      Grosor: "10mm",
      "Material Caja": "Acero con Baño de Oro",
      Resistencia: "50m",
      Movimiento: "Cuarzo Suizo",
    },
  },
  {
    id: 5,
    name: "TechnoMarine Rosa Acero",
    price: "$590.000",
    originalPrice: "$780.000",
    category: "technomarine",
    brand: "TechnoMarine",
    image: "images/5.jpg",
    description:
      "Elegante reloj con esfera rosa y caja de acero inoxidable. Diseño femenino con toques modernos y sofisticados.",
    features: ["Acero Inoxidable", "Esfera Rosa", "Cuarzo", "Fecha", "Femenino"],
    badge: "Elegante",
    inStock: true,
    specifications: {
      Diámetro: "38mm",
      Grosor: "9mm",
      "Material Caja": "Acero Inoxidable",
      Resistencia: "30m",
      Movimiento: "Cuarzo Japonés",
    },
  },
  {
    id: 6,
    name: "G-FRC Automático Bicolor",
    price: "$1.150.000",
    originalPrice: "$1.650.000",
    category: "gfrc",
    brand: "G-FRC",
    image: "images/6.jpg",
    description:
      "Impresionante G-FRC automático con esfera azul, brazalete bicolor acero y oro rosa, fase lunar y tourbillon visible.",
    features: ["Movimiento Automático", "Tourbillon", "Fase Lunar", "Bicolor", "Cristal Zafiro"],
    badge: "Premium",
    inStock: true,
    specifications: {
      Diámetro: "42mm",
      Grosor: "13mm",
      "Material Caja": "Acero y Oro Rosa",
      Resistencia: "100m",
      Movimiento: "Automático Tourbillon",
    },
  },
  {
    id: 7,
    name: "G-FRC Automático Verde",
    price: "$980.000",
    originalPrice: "$1.400.000",
    category: "gfrc",
    brand: "G-FRC",
    image: "images/8.jpg",
    description:
      "Exclusivo G-FRC con esfera verde oliva y complicación tourbillon. Diseño deportivo-elegante para el conocedor.",
    features: ["Automático", "Tourbillon", "Esfera Verde", "Acero Inoxidable", "Deportivo"],
    badge: "Exclusivo",
    inStock: true,
    specifications: {
      Diámetro: "42mm",
      Grosor: "12mm",
      "Material Caja": "Acero Inoxidable 316L",
      Resistencia: "200m",
      Movimiento: "Automático 25 Jewels",
    },
  },
  {
    id: 8,
    name: "G-FRC Automático Negro",
    price: "$920.000",
    originalPrice: "$1.350.000",
    category: "gfrc",
    brand: "G-FRC",
    image: "images/9.jpg",
    description:
      "Reloj deportivo G-FRC con esfera negra rayada y complicación tourbillon dorada. Ideal para el hombre moderno y activo.",
    features: ["Automático", "Tourbillon", "Esfera Negra", "Deportivo", "Premium"],
    badge: "Deportivo",
    inStock: true,
    specifications: {
      Diámetro: "44mm",
      Grosor: "13mm",
      "Material Caja": "Acero Inoxidable",
      Resistencia: "200m",
      Movimiento: "Automático 25 Jewels",
    },
  },
  {
    id: 9,
    name: "G-FRC Automático Azul Premium",
    price: "$850.000",
    originalPrice: "$1.200.000",
    category: "gfrc",
    brand: "G-FRC",
    image: "images/10.jpg",
    description:
      "Reloj automático G-FRC con esfera azul texturizada, complicación de fase lunar y tourbillon. Caja de acero inoxidable de alta calidad.",
    features: ["Movimiento Automático", "Fase Lunar", "Tourbillon", "Acero Inoxidable", "Cristal Mineral"],
    badge: "Destacado",
    inStock: true,
    specifications: {
      Diámetro: "42mm",
      Grosor: "12mm",
      "Material Caja": "Acero Inoxidable 316L",
      Resistencia: "100m",
      Movimiento: "Automático 21 Jewels",
    },
  },
]

// Configuración para Colombia - ACTUALIZADA
const colombiaConfig = {
  whatsappNumber: "573122161186", // Número actualizado
  currency: "COP",
  address: "Cl.47b Sur #1378, Bogotá, Colombia",
  coordinates: {
    lat: 4.5981,
    lng: -74.0758,
  },
  schedule: "Lunes a Sábado: 9:00 AM - 6:00 PM",
  cities: [
    "Bogotá",
    "Medellín",
    "Cali",
    "Barranquilla",
    "Cartagena",
    "Bucaramanga",
    "Pereira",
    "Santa Marta",
    "Ibagué",
    "Cúcuta",
  ],
  shippingInfo: {
    national: "Envío gratis a partir de $500.000",
    time: "2-5 días hábiles",
    cities: "Cobertura nacional",
  },
}

// Variables globales
let currentFilter = "all"
let currentProduct = null
let animationObserver

// Inicialización cuando el DOM está listo
document.addEventListener("DOMContentLoaded", () => {
  initializeApp()
})

function initializeApp() {
  setupNavigation()
  setupScrollEffects()
  setupAnimations()
  renderProducts()
  setupProductFilters()
  setupModal()
  setupCounters()
  setupLazyLoading()
}

// Configuración de navegación
function setupNavigation() {
  const hamburger = document.getElementById("hamburger")
  const navMenu = document.getElementById("nav-menu")
  const navLinks = document.querySelectorAll(".nav-link")
  const navbar = document.getElementById("navbar")

  // Toggle menu móvil
  hamburger?.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    hamburger.classList.toggle("active")
  })

  // Cerrar menu al hacer click en un enlace
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active")
      hamburger.classList.remove("active")
    })
  })

  // Efecto scroll en navbar
  window.addEventListener(
    "scroll",
    debounce(() => {
      if (window.scrollY > 100) {
        navbar.classList.add("scrolled")
      } else {
        navbar.classList.remove("scrolled")
      }
    }, 10),
  )

  // Smooth scroll para enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
}

// Función para scroll suave a secciones
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

// Configuración de efectos de scroll
function setupScrollEffects() {
  // Intersection Observer para animaciones
  animationObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = "running"
          entry.target.classList.add("animate")
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    },
  )

  // Observar elementos para animación
  const animatedElements = document.querySelectorAll(".product-card, .stat, .contact-item, .feature")
  animatedElements.forEach((el) => {
    animationObserver.observe(el)
  })
}

// Configuración de animaciones
function setupAnimations() {
  // Animación de números en estadísticas
  const stats = document.querySelectorAll(".stat-number")
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target)
        statsObserver.unobserve(entry.target)
      }
    })
  })

  stats.forEach((stat) => {
    statsObserver.observe(stat)
  })
}

// Animación de contadores
function animateCounter(element) {
  const target = Number.parseInt(element.getAttribute("data-target"))
  const duration = 2000
  const step = target / (duration / 16)
  let current = 0

  const timer = setInterval(() => {
    current += step
    if (current >= target) {
      current = target
      clearInterval(timer)
    }
    element.textContent = Math.floor(current)
  }, 16)
}

// Renderizar productos
function renderProducts() {
  const productsGrid = document.getElementById("products-grid")
  if (!productsGrid) return

  const filteredProducts =
    currentFilter === "all"
      ? products
      : products.filter((product) => {
          if (currentFilter === "automatico") {
            return product.features.some((feature) => feature.toLowerCase().includes("automático"))
          }
          return product.category === currentFilter
        })

  productsGrid.innerHTML = ""

  filteredProducts.forEach((product, index) => {
    const productCard = createProductCard(product, index)
    productsGrid.appendChild(productCard)
  })

  // Reiniciar observer para nuevos elementos
  const newCards = productsGrid.querySelectorAll(".product-card")
  newCards.forEach((card) => {
    animationObserver.observe(card)
  })
}

// Crear tarjeta de producto
function createProductCard(product, index) {
  const card = document.createElement("div")
  card.className = "product-card"
  card.style.animationDelay = `${index * 0.1}s`
  card.setAttribute("data-category", product.category)

  const discountPercentage = product.originalPrice
    ? Math.round(
        ((Number.parseFloat(product.originalPrice.replace(/[$.]/g, "")) -
          Number.parseFloat(product.price.replace(/[$.]/g, ""))) /
          Number.parseFloat(product.originalPrice.replace(/[$.]/g, ""))) *
          100,
      )
    : 0

  card.innerHTML = `
    <div class="product-image">
      <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="handleImageError(this)">
      <div class="product-badge">${product.badge}</div>
      ${discountPercentage > 0 ? `<div class="product-discount">-${discountPercentage}%</div>` : ""}
    </div>
    <div class="product-info">
      <h3 class="product-title">${product.name}</h3>
      <div class="product-pricing">
        <p class="product-price">${product.price}</p>
        ${product.originalPrice ? `<p class="product-original-price">${product.originalPrice}</p>` : ""}
      </div>
      <p class="product-description">${product.description}</p>
      <div class="product-features">
        ${product.features
          .slice(0, 3)
          .map((feature) => `<span class="feature-tag">${feature}</span>`)
          .join("")}
      </div>
      <div class="product-actions">
        <button class="btn-primary btn-small" onclick="openProductModal(${product.id})">
          Ver Detalles
        </button>
        <button class="btn-secondary btn-small" onclick="contactWhatsAppProduct(${product.id})">
          <i class="fab fa-whatsapp"></i>
        </button>
      </div>
    </div>
  `

  return card
}

// Configurar filtros de productos
function setupProductFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn")

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remover clase active de todos los botones
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      // Agregar clase active al botón clickeado
      button.classList.add("active")

      // Actualizar filtro actual
      currentFilter = button.getAttribute("data-filter")

      // Renderizar productos filtrados
      renderProducts()
    })
  })
}

// Configurar modal de producto
function setupModal() {
  const modal = document.getElementById("product-modal")
  const closeBtn = document.querySelector(".close")

  closeBtn?.addEventListener("click", closeModal)

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal()
    }
  })

  // Cerrar modal con tecla Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal()
    }
  })
}

// Abrir modal de producto
function openProductModal(productId) {
  const product = products.find((p) => p.id === productId)
  if (!product) return

  currentProduct = product

  const modal = document.getElementById("product-modal")
  const modalImg = document.getElementById("modal-img")
  const modalTitle = document.getElementById("modal-title")
  const modalPrice = document.getElementById("modal-price")
  const modalDescription = document.getElementById("modal-description")
  const modalFeatures = document.getElementById("modal-features")

  // Configurar imagen con mejor manejo de errores
  modalImg.src = product.image
  modalImg.alt = product.name
  modalImg.style.display = "block"
  modalImg.onerror = function () {
    this.style.display = "none"
    this.parentElement.innerHTML =
      '<div style="display:flex;align-items:center;justify-content:center;height:300px;background:#f8f8f8;color:#999;font-size:16px;text-align:center;padding:20px;">Imagen no disponible<br><small>Contacta por WhatsApp para ver el producto</small></div>'
  }

  modalTitle.textContent = product.name
  modalPrice.innerHTML = `
    ${product.price}
    ${product.originalPrice ? `<span class="original-price">${product.originalPrice}</span>` : ""}
  `
  modalDescription.textContent = product.description

  modalFeatures.innerHTML = `
    <h4>Características:</h4>
    <ul>
      ${product.features.map((feature) => `<li>• ${feature}</li>`).join("")}
    </ul>
    ${
      Object.keys(product.specifications).length > 0
        ? `
    <h4>Especificaciones:</h4>
    <ul>
      ${Object.entries(product.specifications)
        .map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`)
        .join("")}
    </ul>
    `
        : ""
    }
  `

  // Mostrar modal con mejor animación
  modal.style.display = "flex"
  document.body.style.overflow = "hidden"

  // Enfocar el modal para accesibilidad
  setTimeout(() => {
    modal.focus()
  }, 100)
}

// Cerrar modal
function closeModal() {
  const modal = document.getElementById("product-modal")
  modal.style.display = "none"
  document.body.style.overflow = "auto"
  currentProduct = null
}

// Mostrar notificación
function showNotification(message, type = "info") {
  const notification = document.createElement("div")
  notification.className = `notification ${type}`
  notification.textContent = message

  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === "success" ? "#4CAF50" : type === "error" ? "#f44336" : "#2196F3"};
    color: white;
    padding: 15px 20px;
    border-radius: 10px;
    z-index: 3000;
    max-width: 300px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    animation: slideInRight 0.3s ease-out;
  `

  document.body.appendChild(notification)

  setTimeout(() => {
    notification.style.animation = "slideOutRight 0.3s ease-out"
    setTimeout(() => notification.remove(), 300)
  }, 4000)
}

// Contactar por WhatsApp (general)
function contactWhatsApp() {
  const message = `¡Hola Luis Joyería! 👋

Me interesa conocer más sobre sus relojes de lujo. ¿Podrían brindarme información sobre:

• Catálogo disponible
• Precios y promociones
• Formas de pago
• Envíos a mi ciudad

¡Gracias! 😊`

  const whatsappUrl = `https://wa.me/${colombiaConfig.whatsappNumber}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, "_blank")
}

// Contactar por WhatsApp para producto específico
function contactWhatsAppProduct(productId) {
  const product = productId ? products.find((p) => p.id === productId) : currentProduct
  if (!product) return

  const message = `¡Hola Luis Joyería! 👋

Estoy interesado en el siguiente reloj:

*${product.name}*
• Precio: ${product.price}
• Marca: ${product.brand}

Me gustaría saber:
• ¿Está disponible?
• ¿Incluye garantía?
• ¿Cuáles son las formas de pago?
• ¿Hacen envíos a mi ciudad?

¡Espero su respuesta! 😊`

  const whatsappUrl = `https://wa.me/${colombiaConfig.whatsappNumber}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, "_blank")
}

// Configurar contadores animados
function setupCounters() {
  const counters = document.querySelectorAll(".stat-number")

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target
          const target = Number.parseInt(counter.getAttribute("data-target"))
          const duration = 2000
          const increment = target / (duration / 16)
          let current = 0

          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              current = target
              clearInterval(timer)
            }
            counter.textContent = Math.floor(current)
          }, 16)

          counterObserver.unobserve(counter)
        }
      })
    },
    { threshold: 0.5 },
  )

  counters.forEach((counter) => {
    counterObserver.observe(counter)
  })
}

// Lazy loading para imágenes
function setupLazyLoading() {
  const images = document.querySelectorAll('img[loading="lazy"]')

  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          if (img.dataset.src) {
            img.src = img.dataset.src
            img.classList.remove("lazy")
          }
          imageObserver.unobserve(img)
        }
      })
    })

    images.forEach((img) => imageObserver.observe(img))
  }
}

// Optimización de rendimiento
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Funciones para administrar productos (fácil personalización)
function addProduct(productData) {
  const newProduct = {
    id: products.length + 1,
    inStock: true,
    specifications: {},
    ...productData,
  }
  products.push(newProduct)
  renderProducts()
  showNotification("Producto agregado exitosamente", "success")
}

function editProduct(productId, newData) {
  const productIndex = products.findIndex((p) => p.id === productId)
  if (productIndex !== -1) {
    products[productIndex] = { ...products[productIndex], ...newData }
    renderProducts()
    showNotification("Producto actualizado exitosamente", "success")
  }
}

function removeProduct(productId) {
  const productIndex = products.findIndex((p) => p.id === productId)
  if (productIndex !== -1) {
    products.splice(productIndex, 1)
    renderProducts()
    showNotification("Producto eliminado exitosamente", "success")
  }
}

// Función para manejar errores de imágenes
function handleImageError(img) {
  img.style.display = "none"
  const placeholder = document.createElement("div")
  placeholder.style.cssText = `
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background: linear-gradient(135deg, #f8f8f8, #e8e8e8);
    color: #999;
    font-size: 14px;
    text-align: center;
    padding: 20px;
    flex-direction: column;
    gap: 10px;
  `
  placeholder.innerHTML = `
    <i class="fas fa-image" style="font-size: 2rem; opacity: 0.5;"></i>
    <span>Imagen no disponible</span>
    <small>Contacta por WhatsApp</small>
  `
  img.parentElement.appendChild(placeholder)
}

// Funciones de utilidad
const utils = {
  formatPrice: (price) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
    }).format(price)
  },

  validateEmail: (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  },

  validatePhone: (phone) => {
    const re = /^[+]?[1-9][\d]{0,15}$/
    return re.test(phone)
  },

  formatWhatsAppNumber: (number) => {
    return number.replace(/\D/g, "")
  },
}

// Exportar funciones para uso global
window.scrollToSection = scrollToSection
window.openProductModal = openProductModal
window.contactWhatsApp = contactWhatsApp
window.contactWhatsAppProduct = contactWhatsAppProduct
window.addProduct = addProduct
window.editProduct = editProduct
window.removeProduct = removeProduct

// Agregar estilos CSS adicionales dinámicamente
const additionalStyles = `
  .product-discount {
    position: absolute;
    top: 15px;
    left: 15px;
    background: #e74c3c;
    color: white;
    padding: 5px 10px;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: 600;
  }
  
  .product-pricing {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  
  .product-original-price {
    text-decoration: line-through;
    color: #999;
    font-size: 1rem;
  }
  
  .original-price {
    text-decoration: line-through;
    color: #999;
    font-size: 1.2rem;
    margin-left: 1rem;
  }
  
  @keyframes slideInRight {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  
  @keyframes slideOutRight {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
  }
`

// Agregar estilos al documento
const styleSheet = document.createElement("style")
styleSheet.textContent = additionalStyles
document.head.appendChild(styleSheet)

console.log("🇨🇴 Luis Joyería Colombia - Sistema inicializado correctamente")
console.log(`📱 WhatsApp: +${colombiaConfig.whatsappNumber}`)
console.log(`💎 Productos cargados: ${products.length}`)
