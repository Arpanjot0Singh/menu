document.addEventListener('DOMContentLoaded', () => {

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Add fade-in-up class if it's not already there by default (like in hero)
                if (!entry.target.classList.contains('fade-in-up')) {
                    entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                }
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all menu items and pricing cards
    const animatedElements = document.querySelectorAll('.menu-item, .pricing-card, .header-compact');
    animatedElements.forEach(el => {
        el.style.opacity = '0'; // Hide initially
        observer.observe(el);
    });

    // Smooth scroll for anchor links (if not supported natively)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    console.log("Royal Spice Catering site loaded successfully");
});
