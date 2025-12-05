// Theme Toggle
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.classList.toggle('dark', savedTheme === 'dark');
    
    themeToggle?.addEventListener('click', function() {
        html.classList.toggle('dark');
        const currentTheme = html.classList.contains('dark') ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);
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
    
    // Smooth scroll for anchor links (both relative and absolute)
    document.querySelectorAll('a[href*="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            const hashIndex = href.indexOf('#');
            
            if (hashIndex !== -1) {
                const hash = href.substring(hashIndex);
                const path = href.substring(0, hashIndex).replace(/\/$/, ''); // Remove trailing slash
                const currentPath = window.location.pathname.replace(/\/$/, ''); // Remove trailing slash
                const currentPage = currentPath.split('/').pop() || 'index.html';
                const targetPage = path.split('/').pop() || '';
                
                // If it's a different page, navigate normally (browser will handle it)
                if (path && path !== '' && targetPage !== '' && targetPage !== currentPage && !path.endsWith(currentPage)) {
                    // Let browser handle navigation to different page
                    return;
                }
                
                // If it's the same page or just a hash, handle smooth scroll
                if (hash && hash !== '#') {
                    e.preventDefault();
                    // Small delay to ensure page is loaded if navigating from another page
                    setTimeout(() => {
                        const target = document.querySelector(hash);
                        if (target) {
                            const headerHeight = 100;
                            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                            window.scrollTo({
                                top: Math.max(0, targetPosition),
                                behavior: 'smooth'
                            });
                            // Update URL
                            if (history.pushState) {
                                history.pushState(null, null, hash);
                            }
                        }
                    }, path && path !== '' ? 100 : 0);
                }
            }
        });
    });
    
    // Handle hash on page load (including when navigating from another page)
    function scrollToHash() {
        const hash = window.location.hash;
        if (hash && hash !== '#') {
            const target = document.querySelector(hash);
            if (target) {
                setTimeout(() => {
                    const headerHeight = 100;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    window.scrollTo({
                        top: Math.max(0, targetPosition),
                        behavior: 'smooth'
                    });
                }, 200);
            }
        }
    }
    
    // Handle hash on initial load
    if (document.readyState === 'loading') {
        window.addEventListener('load', scrollToHash);
    } else {
        scrollToHash();
    }
    
    // Handle hash change (when clicking links on the same page)
    window.addEventListener('hashchange', scrollToHash);
});
