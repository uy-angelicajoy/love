// Navigation functionality - smooth scroll to sections
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        link.classList.add('active');
        
        // Smooth scroll to section
        const sectionId = link.getAttribute('data-section');
        const section = document.getElementById(sectionId);
        
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Update active nav link based on scroll position
const sections = document.querySelectorAll('.section-scroll');
const observerOptions = {
    root: null,
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-section') === sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });
}, observerOptions);

sections.forEach(section => observer.observe(section));

// Create N floating "I love you" items (was multilingual; now all English)
const N = 100; // adjust if you want fewer/more
const ui = document.getElementById("ui");

for (let i = 1; i <= N; i++) {
    const love = document.createElement("div");
    love.className = "love";
    love.style.setProperty("--i", i);

    const h = document.createElement("div");
    h.className = "love_horizontal";

    const v = document.createElement("div");
    v.className = "love_vertical";

    const word = document.createElement("div");
    word.className = "love_word";
    word.textContent = "I love you";

    v.appendChild(word);
    h.appendChild(v);
    love.appendChild(h);
    ui.appendChild(love);
}

// Love letter animation
const letterContainer = document.querySelector('.letter-container');
const card = document.querySelector('.card');

if (letterContainer && card) {
    letterContainer.addEventListener('mouseenter', function() {
        card.style.top = '-90px';
    });
    
    letterContainer.addEventListener('mouseleave', function() {
        card.style.top = '10px';
    });
}