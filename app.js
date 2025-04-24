document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.cta-button');
    const styleQuiz = document.querySelector('.style-quiz');
    const generateButton = document.querySelector('.generate-button');
    const loadingScreen = document.querySelector('.loading-screen');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const bodyTypeOptions = document.querySelectorAll('.type-option');

    // Handle CTA button click
    ctaButton.addEventListener('click', () => {
        styleQuiz.style.display = 'block';
        window.scrollTo({
            top: styleQuiz.offsetTop,
            behavior: 'smooth'
        });
    });

    // Handle body type selection
    bodyTypeOptions.forEach(option => {
        option.addEventListener('click', () => {
            bodyTypeOptions.forEach(opt => opt.style.borderColor = 'transparent');
            option.style.borderColor = '#ffffff';
        });
    });

    // Handle generate button click
    generateButton.addEventListener('click', () => {
        loadingScreen.style.display = 'flex';
        // Simulate loading time
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            // Add your style generation logic here
        }, 3000);
    });

    // Handle mobile menu toggle
    menuToggle.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    // Animate dots
    const dots = document.querySelectorAll('.dot');
    let currentDot = 0;

    setInterval(() => {
        dots.forEach(dot => dot.style.background = 'transparent');
        dots[currentDot].style.background = '#ffffff';
        currentDot = (currentDot + 1) % dots.length;
    }, 1000);
}); 