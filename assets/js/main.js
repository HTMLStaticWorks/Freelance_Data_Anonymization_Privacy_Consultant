/* 
    Project: Freelance Data Anonymization & Privacy Consultant
    Script: Global Functionalities
*/

document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-mode');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('light-mode');
            const theme = body.classList.contains('light-mode') ? 'light' : 'dark';
            localStorage.setItem('theme', theme);
            
            // Update Icon
            const icon = themeToggle.querySelector('i');
            if (theme === 'light') {
                icon.classList.replace('bi-moon-stars', 'bi-sun');
            } else {
                icon.classList.replace('bi-sun', 'bi-moon-stars');
            }
        });
    }

    // Set initial theme icon
    if (localStorage.getItem('theme') === 'light' && themeToggle) {
        themeToggle.querySelector('i').classList.replace('bi-moon-stars', 'bi-sun');
    }

    // RTL Toggle Logic
    const rtlToggle = document.getElementById('rtl-toggle');
    const html = document.documentElement;

    if (localStorage.getItem('direction') === 'rtl') {
        html.setAttribute('dir', 'rtl');
        updateRTLStyles(true);
    }

    if (rtlToggle) {
        rtlToggle.addEventListener('click', (e) => {
            e.preventDefault();
            const isRTL = html.getAttribute('dir') === 'rtl';
            const newDir = isRTL ? 'ltr' : 'rtl';
            html.setAttribute('dir', newDir);
            localStorage.setItem('direction', newDir);
            updateRTLStyles(!isRTL);
        });
    }

    function updateRTLStyles(isRTL) {
        const rtlCss = document.getElementById('rtl-css');
        if (isRTL) {
            if (!rtlCss) {
                const link = document.createElement('link');
                link.id = 'rtl-css';
                link.rel = 'stylesheet';
                link.href = 'assets/css/rtl.css';
                document.head.appendChild(link);
            }
        } else if (rtlCss) {
            rtlCss.remove();
        }
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar-custom');
    
    // Back to Top Injection
    const backToTop = document.createElement('button');
    backToTop.id = 'back-to-top';
    backToTop.innerHTML = '<i class="bi bi-arrow-up"></i>';
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', () => {
        // Navbar Scrolled Class
        if (window.scrollY > 50) {
            if(navbar) navbar.classList.add('navbar-scrolled');
            backToTop.style.display = 'flex';
        } else {
            if(navbar) navbar.classList.remove('navbar-scrolled');
            backToTop.style.display = 'none';
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Mobile Menu Close on link click
    const navLinks = document.querySelectorAll('.nav-link');
    const menuToggle = document.querySelector('.navbar-toggler');
    const bsCollapse = new bootstrap.Collapse(document.getElementById('navbarNav'), {toggle:false});
    
    navLinks.forEach((l) => {
        l.addEventListener('click', () => { 
            if (window.innerWidth < 992) {
                bsCollapse.hide();
            }
        });
    });

    // Intersection Observer for Animations
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    // Observe reveal elements
    document.querySelectorAll('.reveal, .stagger-container').forEach(el => {
        revealObserver.observe(el);
    });
});
