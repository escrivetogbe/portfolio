/**
 * Portfolio Elie Mahutin TOGBE — Interactive Script
 * - Theme Switcher (Dark/Light with localStorage persistence)
 * - Mobile Navigation Menu
 * - Navbar Scroll Effect
 * - Email Clipboard Copy & Toast Feedback
 * - Contact Form Mailto Handler
 * - Active Section ScrollSpy
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- Elements ---
    const htmlElement = document.documentElement;
    const themeToggleBtn = document.getElementById('themeToggle');
    const menuToggleBtn = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const navbar = document.getElementById('navbar');
    const copyEmailBtn = document.getElementById('copyEmailBtn');
    const toast = document.getElementById('toast');
    const contactForm = document.getElementById('contactForm');
    const navItems = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    // --- 1. Theme Management (Dark / Light) ---
    const savedTheme = localStorage.getItem('portfolio-theme');
    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Default to dark or user preference
    const initialTheme = savedTheme ? savedTheme : (systemPrefersDark ? 'dark' : 'dark');
    setTheme(initialTheme);

    function setTheme(theme) {
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('portfolio-theme', theme);

        if (themeToggleBtn) {
            const icon = themeToggleBtn.querySelector('i');
            if (icon) {
                if (theme === 'light') {
                    icon.className = 'fa-solid fa-sun';
                } else {
                    icon.className = 'fa-solid fa-moon';
                }
            }
        }
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme') || 'dark';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }

    // --- 2. Mobile Menu Toggle ---
    if (menuToggleBtn && navLinks) {
        menuToggleBtn.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });

        // Close menu when clicking a link
        navItems.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !menuToggleBtn.contains(e.target)) {
                navLinks.classList.remove('open');
            }
        });
    }

    // --- 3. Navbar Scroll Effect ---
    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- 4. Toast Notification Utility ---
    let toastTimeout;
    function showToast(message) {
        if (!toast) return;
        toast.textContent = message;
        toast.classList.add('show');

        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
            toast.classList.remove('show');
        }, 3200);
    }

    // --- 5. Email Clipboard Copy ---
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', async () => {
            const email = 'escrivetogbe@gmail.com';
            try {
                await navigator.clipboard.writeText(email);
                showToast('Email copié dans le presse-papiers !');
            } catch (err) {
                // Fallback
                const tempInput = document.createElement('input');
                tempInput.value = email;
                document.body.appendChild(tempInput);
                tempInput.select();
                document.execCommand('copy');
                document.body.removeChild(tempInput);
                showToast('Email copié dans le presse-papiers !');
            }
        });
    }

    // --- 6. Contact Form Submission (Mailto) ---
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('senderName')?.value || '';
            const email = document.getElementById('senderEmail')?.value || '';
            const subject = document.getElementById('messageSubject')?.value || 'Prise de contact portfolio';
            const body = document.getElementById('messageBody')?.value || '';

            const mailtoUrl = `mailto:escrivetogbe@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
                `De: ${name} (${email})\n\nMessage:\n${body}`
            )}`;

            showToast('Ouverture de votre client de messagerie...');
            window.location.href = mailtoUrl;
        });
    }

    // --- 7. Active Nav Link ScrollSpy ---
    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        const scrollPosition = window.scrollY + 180;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${currentSectionId}`) {
                item.classList.add('active');
            }
        });
    });
});
