
// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation on scroll
gsap.from('.card', {
    scrollTrigger: {
        trigger: '.card',
        start: 'top center'
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2
});

// Stats counter animation
const stats = document.querySelectorAll('.stat-item h3');
stats.forEach(stat => {
    const value = parseFloat(stat.innerText);
    let current = 0;
    const increment = value / 50;
    const updateCount = () => {
        if(current < value) {
            current += increment;
            stat.innerText = Math.round(current);
            requestAnimationFrame(updateCount);
        } else {
            stat.innerText = value;
        }
    };
    updateCount();
});
