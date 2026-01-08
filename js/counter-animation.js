// Counter Animation for Percentage Stats
const percentageNumbers = document.querySelectorAll('.percentage-number');
let hasAnimated = false;

function animateCounters() {
    percentageNumbers.forEach(num => {
        const target = parseInt(num.dataset.target);
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const counter = setInterval(() => {
            current += increment;
            if (current >= target) {
                num.textContent = target + '%';
                clearInterval(counter);
            } else {
                num.textContent = Math.floor(current) + '%';
            }
        }, 16);
    });
}

// Intersection Observer for scroll-triggered animation
const statsSection = document.getElementById('statsSection');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
            animateCounters();
            hasAnimated = true;
        }
    });
}, { threshold: 0.5 });

observer.observe(statsSection);
