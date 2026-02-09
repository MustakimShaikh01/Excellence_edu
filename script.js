// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Navbar Animation
gsap.from("header", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

// Hero Section Animations
gsap.utils.toArray('.gsap-hero-reveal').forEach((element, i) => {
    gsap.from(element, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5 + (i * 0.2), // Stagger delay
        ease: "power3.out"
    });
});

// Clients Grid Stagger
gsap.from(".client-card", {
    scrollTrigger: {
        trigger: ".clients-grid",
        start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2, // Animate one by one
    ease: "back.out(1.7)"
});

// Slide In Left (Image)
gsap.from(".gsap-slide-in-left", {
    scrollTrigger: {
        trigger: ".about-feature",
        start: "top 75%",
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

// Slide In Right (Content)
gsap.from(".gsap-slide-in-right", {
    scrollTrigger: {
        trigger: ".about-feature",
        start: "top 75%",
    },
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    delay: 0.2
});

// Footer items
gsap.from(".footer-info, .footer-contact", {
    scrollTrigger: {
        trigger: "footer",
        start: "top 90%",
    },
    y: 30,
    opacity: 0,
    duration: 1,
    stagger: 0.3
});

// Mobile Menu Toggle
const mobileBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
        // Simple toggle for mobile menu presentation
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '80px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.backgroundColor = 'white';
            navLinks.style.padding = '2rem';
            navLinks.style.boxShadow = '0 10px 15px rgba(0,0,0,0.1)';
        }
    });
}
