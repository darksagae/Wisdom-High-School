// Mobile Menu Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Hero Slider
const heroSlides = document.querySelectorAll('.hero-slide');
const indicators = document.querySelectorAll('.indicator');
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    // Remove active class from all slides and indicators
    heroSlides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));

    // Add active class to current slide and indicator
    if (heroSlides[index]) {
        heroSlides[index].classList.add('active');
    }
    if (indicators[index]) {
        indicators[index].classList.add('active');
    }
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % heroSlides.length;
    showSlide(currentSlide);
}

function startSlider() {
    slideInterval = setInterval(nextSlide, 8000); // Change slide every 8 seconds
}

function stopSlider() {
    clearInterval(slideInterval);
}

// Initialize slider
if (heroSlides.length > 0) {
    // Show first slide immediately so CSS handles the smooth animation
    showSlide(0);
    startSlider();

    // Pause on hover
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.addEventListener('mouseenter', stopSlider);
        hero.addEventListener('mouseleave', startSlider);
    }

    // Indicator click handlers
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
            stopSlider();
            startSlider(); // Restart timer
        });
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        if (email) {
            alert(`Thank you for subscribing! We'll send updates to ${email}`);
            newsletterForm.reset();
        }
    });
}

// Course search form submission
const courseSearchForm = document.querySelector('.course-search-form');
if (courseSearchForm) {
    courseSearchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(courseSearchForm);
        const searchParams = new URLSearchParams(formData);
        alert('Course search functionality would be implemented here. Search parameters: ' + searchParams.toString());
    });
}

// Scroll to top functionality
let scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: var(--primary-color);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    z-index: 1000;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    transition: all 0.3s;
`;
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'flex';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollToTopBtn.addEventListener('mouseenter', () => {
    scrollToTopBtn.style.transform = 'translateY(-5px)';
    scrollToTopBtn.style.background = 'var(--primary-hover)';
});

scrollToTopBtn.addEventListener('mouseleave', () => {
    scrollToTopBtn.style.transform = 'translateY(0)';
    scrollToTopBtn.style.background = 'var(--primary-color)';
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.quick-link-item, .program-card, .event-item, .about-text, .about-image');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Video play button (opens YouTube in new tab)
const videoPlayBtn = document.querySelector('.video-play-btn');
if (videoPlayBtn) {
    videoPlayBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const videoUrl = videoPlayBtn.getAttribute('href');
        if (videoUrl) {
            window.open(videoUrl, '_blank');
        }
    });
}

// Add active state to navigation based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.classList.remove('active');
            });
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
});

// Course Search Level Selection
const levelSelect = document.getElementById('level-select');
const olevelSubjects = document.getElementById('olevel-subjects');
const alevelCombinations = document.getElementById('alevel-combinations');

if (levelSelect) {
    levelSelect.addEventListener('change', function() {
        if (this.value === 'olevel') {
            olevelSubjects.style.display = 'block';
            alevelCombinations.style.display = 'none';
            document.getElementById('alevel-combination-select').value = '';
        } else if (this.value === 'alevel') {
            alevelCombinations.style.display = 'block';
            olevelSubjects.style.display = 'none';
            document.getElementById('olevel-subject-select').value = '';
        } else {
            olevelSubjects.style.display = 'none';
            alevelCombinations.style.display = 'none';
            document.getElementById('olevel-subject-select').value = '';
            document.getElementById('alevel-combination-select').value = '';
        }
    });
}

console.log('Wisdom High School - Rwimi website loaded successfully!');

