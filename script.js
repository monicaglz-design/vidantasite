// Navigation functionality
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-menu a');



// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Destinations slider functionality
const destinationsGrid = document.querySelector('.destinations-grid');
const sliderPrev = document.querySelector('.slider-prev');
const sliderNext = document.querySelector('.slider-next');

if (sliderPrev && sliderNext && destinationsGrid) {
    const scrollAmount = 370; // Card width + gap
    
    sliderNext.addEventListener('click', () => {
        destinationsGrid.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
    
    sliderPrev.addEventListener('click', () => {
        destinationsGrid.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });
    
    // Optional: Hide arrows at scroll boundaries
    destinationsGrid.addEventListener('scroll', () => {
        const maxScroll = destinationsGrid.scrollWidth - destinationsGrid.clientWidth;
        
        if (destinationsGrid.scrollLeft <= 0) {
            sliderPrev.style.opacity = '0.3';
            sliderPrev.style.cursor = 'default';
        } else {
            sliderPrev.style.opacity = '1';
            sliderPrev.style.cursor = 'pointer';
        }
        
        if (destinationsGrid.scrollLeft >= maxScroll - 10) {
            sliderNext.style.opacity = '0.3';
            sliderNext.style.cursor = 'default';
        } else {
            sliderNext.style.opacity = '1';
            sliderNext.style.cursor = 'pointer';
        }
    });
    
    // Initialize arrow states
    sliderPrev.style.opacity = '0.3';
}

// Hotels slider functionality
const hotelsGrid = document.querySelector('.hotels-grid');
const hotelsPrev = document.querySelector('.hotels-prev');
const hotelsNext = document.querySelector('.hotels-next');

if (hotelsPrev && hotelsNext && hotelsGrid) {
    const scrollAmount = 320; // Card width + gap
    
    hotelsNext.addEventListener('click', () => {
        hotelsGrid.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
    
    hotelsPrev.addEventListener('click', () => {
        hotelsGrid.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });
    
    // Optional: Hide arrows at scroll boundaries
    hotelsGrid.addEventListener('scroll', () => {
        const maxScroll = hotelsGrid.scrollWidth - hotelsGrid.clientWidth;
        
        if (hotelsGrid.scrollLeft <= 0) {
            hotelsPrev.style.opacity = '0.3';
            hotelsPrev.style.cursor = 'default';
        } else {
            hotelsPrev.style.opacity = '1';
            hotelsPrev.style.cursor = 'pointer';
        }
        
        if (hotelsGrid.scrollLeft >= maxScroll - 10) {
            hotelsNext.style.opacity = '0.3';
            hotelsNext.style.cursor = 'default';
        } else {
            hotelsNext.style.opacity = '1';
            hotelsNext.style.cursor = 'pointer';
        }
    });
    
    // Initialize arrow states
    hotelsPrev.style.opacity = '0.3';
}

// Activities carousel functionality
const carouselTrack = document.querySelector('.carousel-track');
const carouselPrev = document.querySelector('.carousel-prev');
const carouselNext = document.querySelector('.carousel-next');

if (carouselTrack && carouselPrev && carouselNext) {
    carouselNext.addEventListener('click', () => {
        carouselTrack.scrollBy({
            left: 370, // slide width + gap
            behavior: 'smooth'
        });
    });
    
    carouselPrev.addEventListener('click', () => {
        carouselTrack.scrollBy({
            left: -370,
            behavior: 'smooth'
        });
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);



// Parallax effect for hero section
const hero = document.querySelector('.hero');
if (hero) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        hero.style.backgroundPositionY = `${parallax}px`;
    });
}

// CTA button interactions
const ctaButtons = document.querySelectorAll('.cta-button, .secondary-button, .cta-button-light');
ctaButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Create ripple effect
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.background = 'rgba(255, 255, 255, 0.5)';
        ripple.style.borderRadius = '50%';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        
        const rect = button.getBoundingClientRect();
        ripple.style.left = (e.clientX - rect.left) + 'px';
        ripple.style.top = (e.clientY - rect.top) + 'px';
        
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(20);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}







// Console greeting
console.log('%c¡Bienvenido a Vida Vacations! 🌴', 'color: #00bfff; font-size: 20px; font-weight: bold;');
console.log('%cExplore el lujo con nosotros', 'color: #1a4d7d; font-size: 14px;');
