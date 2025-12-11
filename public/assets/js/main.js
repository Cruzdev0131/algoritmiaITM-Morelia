// Funcionalidad del menú móvil
document.addEventListener('DOMContentLoaded', function() {
    
    // Crear el botón hamburguesa y el overlay para móvil
    function createMobileMenu() {
        const nav = document.querySelector('nav');
        if (!nav) return;

        // Crear botón hamburguesa
        const hamburger = document.createElement('button');
        hamburger.className = 'hamburger-menu';
        hamburger.innerHTML = `
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
        `;
        hamburger.setAttribute('aria-label', 'Abrir menú de navegación');

        // Crear overlay móvil
        const mobileOverlay = document.createElement('div');
        mobileOverlay.className = 'mobile-nav-overlay';

        // Crear contenedor del menú móvil
        const mobileNav = document.createElement('div');
        mobileNav.className = 'mobile-nav';

        // Clonar los enlaces de navegación
        const navLinks = nav.querySelectorAll('a');
        const mobileNavList = document.createElement('ul');
        mobileNavList.className = 'mobile-nav-list';

        navLinks.forEach(link => {
            const listItem = document.createElement('li');
            const mobileLink = link.cloneNode(true);
            mobileLink.addEventListener('click', closeMobileMenu);
            listItem.appendChild(mobileLink);
            mobileNavList.appendChild(listItem);
        });

        // Crear botón de cerrar
        const closeButton = document.createElement('button');
        closeButton.className = 'mobile-nav-close';
        closeButton.innerHTML = '×';
        closeButton.setAttribute('aria-label', 'Cerrar menú de navegación');

        // Ensamblar el menú móvil
        mobileNav.appendChild(closeButton);
        mobileNav.appendChild(mobileNavList);
        mobileOverlay.appendChild(mobileNav);

        // Agregar elementos al DOM
        nav.appendChild(hamburger);
        document.body.appendChild(mobileOverlay);

        // Event listeners
        hamburger.addEventListener('click', openMobileMenu);
        closeButton.addEventListener('click', closeMobileMenu);
        mobileOverlay.addEventListener('click', function(e) {
            if (e.target === mobileOverlay) {
                closeMobileMenu();
            }
        });

        // Funciones para abrir/cerrar menú
        function openMobileMenu() {
            mobileOverlay.classList.add('active');
            hamburger.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeMobileMenu() {
            mobileOverlay.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.style.overflow = '';
        }

        // Cerrar menú al redimensionar ventana
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                closeMobileMenu();
            }
        });
    }

    // Inicializar menú móvil
    createMobileMenu();

    // Animaciones suaves al hacer scroll
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observar elementos con animación
        const animatedElements = document.querySelectorAll('.post, .destacado, .faq-item');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    // Inicializar animaciones
    initScrollAnimations();

    // Funcionalidad FAQ (si existe)
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Cerrar todas las preguntas
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Abrir la pregunta clickeada si no estaba activa
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });

    // Efecto parallax suave para el header
    function initParallax() {
        const clubSection = document.querySelector('.club-section');
        if (!clubSection) return;

        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            clubSection.style.transform = `translateY(${rate}px)`;
        });
    }

    // Inicializar parallax solo en desktop
    if (window.innerWidth > 768) {
        initParallax();
    }

    // Mejorar la experiencia de carga
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });

    console.log('🚀 CAPC-ITM Website cargado correctamente');
}); 