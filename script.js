// Theme Toggle
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;

    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Ensure we start with light mode (remove any existing dark class)
    html.classList.remove('dark');
    
    // Apply the saved theme - only add 'dark' class if saved theme is 'dark'
    // Otherwise, default to light mode (no class needed)
    if (savedTheme === 'dark') {
        html.classList.add('dark');
    }
    
    // Update logo on theme change
    function updateLogo() {
        const isDark = html.classList.contains('dark');
        const allLogoDarks = document.querySelectorAll('.logo .logo-dark');
        const allLogoLights = document.querySelectorAll('.logo .logo-light');
        
        allLogoDarks.forEach(logo => {
            logo.style.display = isDark ? 'none' : 'block';
        });
        
        allLogoLights.forEach(logo => {
            logo.style.display = isDark ? 'block' : 'none';
        });
    }
    
    // Initial logo update
    updateLogo();
    
    themeToggle?.addEventListener('click', function() {
        const isCurrentlyDark = html.classList.contains('dark');
        
        if (isCurrentlyDark) {
            // Switch to light mode
            html.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            // Switch to dark mode
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
        
        updateLogo();
    });
    
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    navToggle?.addEventListener('click', function() {
        navMenu?.classList.toggle('active');
        const isExpanded = navMenu?.classList.contains('active');
        navToggle.setAttribute('aria-expanded', isExpanded);
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu?.classList.remove('active');
            navToggle?.setAttribute('aria-expanded', 'false');
        });
    });
    
    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    const fadeElements = document.querySelectorAll('.fade-in-up');
    fadeElements.forEach(el => observer.observe(el));
    
    // Header scroll effect
    let lastScroll = 0;
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // Smooth scroll for anchor links (only for same-page anchors)
    // Only intercept links that are pure hash links (same page)
    document.querySelectorAll('a[href]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle links that start with # and nothing before it (same page anchors)
            // Ignore links that have a path before the hash (like /services.html#section)
            if (href && href.startsWith('#') && href.length > 1) {
                // This is a same-page anchor, handle smooth scroll
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerHeight = 100;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    window.scrollTo({
                        top: Math.max(0, targetPosition),
                        behavior: 'smooth'
                    });
                    // Update URL
                    if (history.pushState) {
                        history.pushState(null, null, href);
                    }
                }
            }
            // For all other links (including /services.html#section), let browser handle normally
        });
    });
    
    // Handle hash on page load (including when navigating from another page)
    function scrollToHash() {
        const hash = window.location.hash;
        if (hash && hash !== '#') {
            // Try multiple times in case page is still loading
            let attempts = 0;
            const maxAttempts = 10;
            
            const tryScroll = () => {
                attempts++;
                const target = document.querySelector(hash);
                if (target) {
                    const headerHeight = 100;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    window.scrollTo({
                        top: Math.max(0, targetPosition),
                        behavior: 'smooth'
                    });
                } else if (attempts < maxAttempts) {
                    // Retry after a short delay if element not found yet
                    setTimeout(tryScroll, 100);
                }
            };
            
            // Start trying immediately and also after page load
            tryScroll();
            setTimeout(tryScroll, 100);
            setTimeout(tryScroll, 300);
            setTimeout(tryScroll, 500);
        }
    }
    
    // Handle hash on initial load - multiple strategies
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', scrollToHash);
        window.addEventListener('load', scrollToHash);
    } else {
        scrollToHash();
    }
    
    // Handle hash change (when clicking links on the same page)
    window.addEventListener('hashchange', scrollToHash);
    
    // Also handle when page becomes visible (for browser back/forward)
    document.addEventListener('visibilitychange', function() {
        if (!document.hidden) {
            scrollToHash();
        }
    });
});
