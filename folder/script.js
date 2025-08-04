// Premium Portfolio JS: Modern pattern, glassmorphism, and diamond/royal theme

// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.hash !== "") {
            e.preventDefault();
            const hash = this.hash;
            document.querySelector(hash).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Glassmorphism fade-in animation on scroll
const faders = document.querySelectorAll('section, .project-card');
const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};
const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
    });
}, appearOptions);
faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Diamond sparkle effect on hero icons
function sparkleIcon(iconSelector) {
    const icons = document.querySelectorAll(iconSelector);
    icons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.classList.add('sparkle');
        });
        icon.addEventListener('mouseleave', () => {
            icon.classList.remove('sparkle');
        });
    });
}
sparkleIcon('.hero-icon-left i, .hero-icon-right i, .logo-icon, .footer-icon');

// Add sparkle animation via CSS if not present
(function addSparkleCSS() {
    if (document.getElementById('sparkle-css')) return;
    const style = document.createElement('style');
    style.id = 'sparkle-css';
    style.innerHTML = `
    .sparkle {
        animation: sparkle 0.7s linear;
    }
    @keyframes sparkle {
        0% { filter: drop-shadow(0 0 0 #fffbe6); }
        50% { filter: drop-shadow(0 0 16px #fffbe6) brightness(1.5); }
        100% { filter: drop-shadow(0 0 0 #fffbe6); }
    }
    `;
    document.head.appendChild(style);
})();

// Glassmorphism appear animation
(function addAppearCSS() {
    if (document.getElementById('appear-css')) return;
    const style = document.createElement('style');
    style.id = 'appear-css';
    style.innerHTML = `
    .appear {
        opacity: 1 !important;
        transform: translateY(0) scale(1) !important;
        transition: opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1);
        box-shadow: 0 4px 32px #8fd3f488, 0 0 0 8px #fffbe6;
    }
    section, .project-card {
        opacity: 0;
        transform: translateY(40px) scale(0.98);
        transition: opacity 0.8s, transform 0.8s;
    }
    `;
    document.head.appendChild(style);
})();
